﻿using Core.Application.Accounts.Models;
using MediatR;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Application.Accounts.Models.Views;
using Core.Application.Accounts.Models.Enums;

namespace Core.Application.Accounts.Queries
{
    public class GetAccountListQuery : IRequest<AccountListResultsViewModel>
    {
        public GetAccountListQuery()
        {
            //Default Query Options
            PageSize = 20;
            OrderBy = OrderBy.Name;
            OrderDirection = OrderDirection.ASC;
            ContinuationToken = null;
        }

        public int PageSize { get; set; }
        public OrderBy OrderBy { get; set; }
        public OrderDirection OrderDirection { get; set; }

        public string ContinuationToken; //<-- Null on first call
    }
}
