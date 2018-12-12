﻿using Microsoft.Azure.Documents.Client;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;
using Microsoft.WindowsAzure.Storage;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Common.Configuration
{
    public class Initialize
    {
        /// <summary>
        /// Takes in a .NET Core IConfiguration DI object and creates an injectable ICoreConfiguration object.
        /// Ensures that settings and client access objects are created once per application instance.
        /// Should be generated by the main application entry point and injected as a dependency.
        /// Generates a reusable DocumentClient.
        /// Generates a reuable CloudStorageAccount.
        /// Generates a reuable Redis Client.
        /// Passes application settings through the application domain via easy to access static class properties
        /// </summary>
        public static ICoreConfiguration InitializeCoreConfiguration(IConfiguration configuration)
        {
            var coreConfiguration = new CoreConfiguration();


            #region Map appsettings.json to ICoreConfiguration class properties (Showing multiple formats)

            //coreConfiguration.Application.Name = configuration["Application:Name"]; //<-- Alternative Format
            coreConfiguration.Application.Name = configuration.GetSection("Application").GetSection("Name").Value;


            #region Azure Resource Access

            #region Settings/Keys

            // CosmosDB
            coreConfiguration.Azure.CosmosDb.Settings.Url = configuration
                .GetSection("Azure")
                .GetSection("CosmosDb")
                .GetSection("Url").Value;

            coreConfiguration.Azure.CosmosDb.Settings.Key = configuration
                .GetSection("Azure")
                .GetSection("CosmosDb")
                .GetSection("Key").Value;

            coreConfiguration.Azure.CosmosDb.Settings.ReadOnlyKey = configuration
                .GetSection("Azure")
                .GetSection("CosmosDb")
                .GetSection("ReadOnlyKey").Value;

            coreConfiguration.Azure.CosmosDb.Settings.Database = configuration
                .GetSection("Azure")
                .GetSection("CosmosDb")
                .GetSection("Database").Value;  
            
            coreConfiguration.Azure.CosmosDb.Settings.Collection = configuration
                .GetSection("Azure")
                .GetSection("CosmosDb")
                .GetSection("Collection").Value;

            // Storage
            coreConfiguration.Azure.Storage.Settings.Name = configuration
                .GetSection("Azure")
                .GetSection("Storage")
                .GetSection("Name").Value;

            coreConfiguration.Azure.Storage.Settings.Key = configuration
                .GetSection("Azure")
                .GetSection("Storage")
                .GetSection("Key").Value;

            // Redis
            coreConfiguration.Azure.Redis.Settings.Url = configuration
                .GetSection("Azure")
                .GetSection("Redis")
                .GetSection("Url").Value;

            coreConfiguration.Azure.Redis.Settings.Key = configuration
                .GetSection("Azure")
                .GetSection("Redis")
                .GetSection("Key").Value;

            #endregion

            #region Clients and Service Connections

            #region CosmosDb/DocumentDb

            ConnectionPolicy _connectionPolicy = new ConnectionPolicy
            {
                // Since we are running within Azure we use Direct/TCP connections for performance.
                // Web clients hosted on Azure using ReadOnly keys should also use this.
                // External clients like mobile phones that have ReadOnly Keys should use Gateway/Https
                ConnectionMode = ConnectionMode.Direct,
                ConnectionProtocol = Protocol.Tcp,
                RetryOptions = new RetryOptions
                {
                    MaxRetryAttemptsOnThrottledRequests = 6,
                    MaxRetryWaitTimeInSeconds = 30,
                }
            };

            // Using ICoreConfiguration ensures you have a DocumentClient instance always stored away for re-use.
            coreConfiguration.Azure.CosmosDb.Client = new DocumentClient(new Uri(
                    coreConfiguration.Azure.CosmosDb.Settings.Url),
                    coreConfiguration.Azure.CosmosDb.Settings.Key,
                    _connectionPolicy 
                    );

            #endregion

            #region Storage Account

            coreConfiguration.Azure.Storage.StorageAccount = CloudStorageAccount.Parse(
                string.Concat(
                    "DefaultEndpointsProtocol=https;AccountName=",
                    coreConfiguration.Azure.Storage.Settings.Name,
                    ";AccountKey=",
                    coreConfiguration.Azure.Storage.Settings.Key)
                );

            #endregion

            #region Redis Multiplexers

            // Because the ConnectionMultiplexer does a lot, it is designed to be shared and reused between callers.
            // You should not create a ConnectionMultiplexer per operation. It is fully thread-safe.
            // Using ICoreConfiguration ensures you have a ConnectionMultiplexer instance always stored away for re-use.

            // Connection String
            StringBuilder redisConnectionString = new StringBuilder();
            redisConnectionString.Append(coreConfiguration.Azure.Redis.Settings.Url);
            redisConnectionString.Append(", ssl=false, password=");
            redisConnectionString.Append(coreConfiguration.Azure.Redis.Settings.Key);

            // Configuration
            var redisConfiguration = ConfigurationOptions.Parse(redisConnectionString.ToString());
            redisConfiguration.AllowAdmin = true;

            // Once configured and injected this multiplexer should not need to be configured again
            coreConfiguration.Azure.Redis.ConnectionMultiplexer = ConnectionMultiplexer.Connect(redisConfiguration);


            #endregion

            #endregion

            #endregion

            #endregion

            return coreConfiguration;

        }
    }
}
