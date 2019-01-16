﻿/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.11.0 (NJsonSchema v9.13.13.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class AccountsService {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "";
    }

    /**
     * @param pageSize (optional) 
     * @param orderBy (optional) 
     * @param orderDirection (optional) 
     * @param continuationToken (optional) 
     * @return Success
     */
    list(pageSize: number | null | undefined, orderBy: OrderBy | null | undefined, orderDirection: OrderDirection | null | undefined, continuationToken: string | null | undefined): Observable<AccountListResultsViewModel> {
        let url_ = this.baseUrl + "/api/accounts/list?";
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&"; 
        if (orderBy !== undefined)
            url_ += "orderBy=" + encodeURIComponent("" + orderBy) + "&"; 
        if (orderDirection !== undefined)
            url_ += "orderDirection=" + encodeURIComponent("" + orderDirection) + "&"; 
        if (continuationToken !== undefined)
            url_ += "continuationToken=" + encodeURIComponent("" + continuationToken) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processList(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processList(<any>response_);
                } catch (e) {
                    return <Observable<AccountListResultsViewModel>><any>_observableThrow(e);
                }
            } else
                return <Observable<AccountListResultsViewModel>><any>_observableThrow(response_);
        }));
    }

    protected processList(response: HttpResponseBase): Observable<AccountListResultsViewModel> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AccountListResultsViewModel.fromJS(resultData200) : new AccountListResultsViewModel();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AccountListResultsViewModel>(<any>null);
    }

    /**
     * @param query (optional) 
     * @param page (optional) 
     * @param pageSize (optional) 
     * @param orderBy (optional) 
     * @param orderDirection (optional) 
     * @return Success
     */
    search(query: string | null | undefined, page: number | null | undefined, pageSize: number | null | undefined, orderBy: OrderBy2 | null | undefined, orderDirection: OrderDirection2 | null | undefined): Observable<AccountListResultsViewModel> {
        let url_ = this.baseUrl + "/api/accounts/search?";
        if (query !== undefined)
            url_ += "query=" + encodeURIComponent("" + query) + "&"; 
        if (page !== undefined)
            url_ += "page=" + encodeURIComponent("" + page) + "&"; 
        if (pageSize !== undefined)
            url_ += "pageSize=" + encodeURIComponent("" + pageSize) + "&"; 
        if (orderBy !== undefined)
            url_ += "orderBy=" + encodeURIComponent("" + orderBy) + "&"; 
        if (orderDirection !== undefined)
            url_ += "orderDirection=" + encodeURIComponent("" + orderDirection) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processSearch(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processSearch(<any>response_);
                } catch (e) {
                    return <Observable<AccountListResultsViewModel>><any>_observableThrow(e);
                }
            } else
                return <Observable<AccountListResultsViewModel>><any>_observableThrow(response_);
        }));
    }

    protected processSearch(response: HttpResponseBase): Observable<AccountListResultsViewModel> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AccountListResultsViewModel.fromJS(resultData200) : new AccountListResultsViewModel();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AccountListResultsViewModel>(<any>null);
    }

    /**
     * @return Success
     */
    details(nameKey: string): Observable<AccountDetailsViewModel> {
        let url_ = this.baseUrl + "/api/accounts/details/{nameKey}";
        if (nameKey === undefined || nameKey === null)
            throw new Error("The parameter 'nameKey' must be defined.");
        url_ = url_.replace("{nameKey}", encodeURIComponent("" + nameKey)); 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDetails(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDetails(<any>response_);
                } catch (e) {
                    return <Observable<AccountDetailsViewModel>><any>_observableThrow(e);
                }
            } else
                return <Observable<AccountDetailsViewModel>><any>_observableThrow(response_);
        }));
    }

    protected processDetails(response: HttpResponseBase): Observable<AccountDetailsViewModel> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? AccountDetailsViewModel.fromJS(resultData200) : new AccountDetailsViewModel();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<AccountDetailsViewModel>(<any>null);
    }

    /**
     * @param createAccountServiceModel (optional) 
     * @return Success
     */
    create(createAccountServiceModel: CreateAccountServiceModel | null | undefined): Observable<CreateAccountCommandResponse> {
        let url_ = this.baseUrl + "/api/accounts/create";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(createAccountServiceModel);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreate(<any>response_);
                } catch (e) {
                    return <Observable<CreateAccountCommandResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<CreateAccountCommandResponse>><any>_observableThrow(response_);
        }));
    }

    protected processCreate(response: HttpResponseBase): Observable<CreateAccountCommandResponse> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? CreateAccountCommandResponse.fromJS(resultData200) : new CreateAccountCommandResponse();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<CreateAccountCommandResponse>(<any>null);
    }

    /**
     * @param id (optional) 
     * @param value (optional) 
     * @return Success
     */
    update(id: number | null | undefined, value: string | null | undefined): Observable<void> {
        let url_ = this.baseUrl + "/api/accounts/update?";
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(value);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json", 
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processUpdate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processUpdate(<any>response_);
                } catch (e) {
                    return <Observable<void>><any>_observableThrow(e);
                }
            } else
                return <Observable<void>><any>_observableThrow(response_);
        }));
    }

    protected processUpdate(response: HttpResponseBase): Observable<void> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return _observableOf<void>(<any>null);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<void>(<any>null);
    }

    /**
     * @param id (optional) 
     * @return Success
     */
    delete(id: string | null | undefined): Observable<BaseResponse> {
        let url_ = this.baseUrl + "/api/accounts/delete?";
        if (id !== undefined)
            url_ += "id=" + encodeURIComponent("" + id) + "&"; 
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("delete", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processDelete(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processDelete(<any>response_);
                } catch (e) {
                    return <Observable<BaseResponse>><any>_observableThrow(e);
                }
            } else
                return <Observable<BaseResponse>><any>_observableThrow(response_);
        }));
    }

    protected processDelete(response: HttpResponseBase): Observable<BaseResponse> {
        const status = response.status;
        const responseBlob = 
            response instanceof HttpResponse ? response.body : 
            (<any>response).error instanceof Blob ? (<any>response).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }};
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = resultData200 ? BaseResponse.fromJS(resultData200) : new BaseResponse();
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap(_responseText => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf<BaseResponse>(<any>null);
    }
}

export class AccountListResultsViewModel implements IAccountListResultsViewModel {
    count?: number | undefined;
    hasMoreResults?: boolean | undefined;
    accounts?: AccountListViewItem[] | undefined;
    editEnabled?: boolean | undefined;
    deleteEnabled?: boolean | undefined;
    continuationToken?: string | undefined;

    constructor(data?: IAccountListResultsViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.count = data["count"];
            this.hasMoreResults = data["hasMoreResults"];
            if (data["accounts"] && data["accounts"].constructor === Array) {
                this.accounts = [];
                for (let item of data["accounts"])
                    this.accounts.push(AccountListViewItem.fromJS(item));
            }
            this.editEnabled = data["editEnabled"];
            this.deleteEnabled = data["deleteEnabled"];
            this.continuationToken = data["continuationToken"];
        }
    }

    static fromJS(data: any): AccountListResultsViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AccountListResultsViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["count"] = this.count;
        data["hasMoreResults"] = this.hasMoreResults;
        if (this.accounts && this.accounts.constructor === Array) {
            data["accounts"] = [];
            for (let item of this.accounts)
                data["accounts"].push(item.toJSON());
        }
        data["editEnabled"] = this.editEnabled;
        data["deleteEnabled"] = this.deleteEnabled;
        data["continuationToken"] = this.continuationToken;
        return data; 
    }
}

export interface IAccountListResultsViewModel {
    count?: number | undefined;
    hasMoreResults?: boolean | undefined;
    accounts?: AccountListViewItem[] | undefined;
    editEnabled?: boolean | undefined;
    deleteEnabled?: boolean | undefined;
    continuationToken?: string | undefined;
}

export class AccountListViewItem implements IAccountListViewItem {
    id?: string | undefined;
    name?: string | undefined;
    nameKey?: string | undefined;
    createdDate?: Date | undefined;

    constructor(data?: IAccountListViewItem) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.nameKey = data["nameKey"];
            this.createdDate = data["createdDate"] ? new Date(data["createdDate"].toString()) : <any>undefined;
        }
    }

    static fromJS(data: any): AccountListViewItem {
        data = typeof data === 'object' ? data : {};
        let result = new AccountListViewItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["nameKey"] = this.nameKey;
        data["createdDate"] = this.createdDate ? this.createdDate.toISOString() : <any>undefined;
        return data; 
    }
}

export interface IAccountListViewItem {
    id?: string | undefined;
    name?: string | undefined;
    nameKey?: string | undefined;
    createdDate?: Date | undefined;
}

export class AccountDetailsViewModel implements IAccountDetailsViewModel {
    account?: Account | undefined;
    editEnabled?: boolean | undefined;
    deleteEnabled?: boolean | undefined;

    constructor(data?: IAccountDetailsViewModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.account = data["account"] ? Account.fromJS(data["account"]) : <any>undefined;
            this.editEnabled = data["editEnabled"];
            this.deleteEnabled = data["deleteEnabled"];
        }
    }

    static fromJS(data: any): AccountDetailsViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new AccountDetailsViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["account"] = this.account ? this.account.toJSON() : <any>undefined;
        data["editEnabled"] = this.editEnabled;
        data["deleteEnabled"] = this.deleteEnabled;
        return data; 
    }
}

export interface IAccountDetailsViewModel {
    account?: Account | undefined;
    editEnabled?: boolean | undefined;
    deleteEnabled?: boolean | undefined;
}

export class Account implements IAccount {
    id?: string | undefined;
    name?: string | undefined;
    nameKey?: string | undefined;
    users?: User[] | undefined;

    constructor(data?: IAccount) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.nameKey = data["nameKey"];
            if (data["users"] && data["users"].constructor === Array) {
                this.users = [];
                for (let item of data["users"])
                    this.users.push(User.fromJS(item));
            }
        }
    }

    static fromJS(data: any): Account {
        data = typeof data === 'object' ? data : {};
        let result = new Account();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["nameKey"] = this.nameKey;
        if (this.users && this.users.constructor === Array) {
            data["users"] = [];
            for (let item of this.users)
                data["users"].push(item.toJSON());
        }
        return data; 
    }
}

export interface IAccount {
    id?: string | undefined;
    name?: string | undefined;
    nameKey?: string | undefined;
    users?: User[] | undefined;
}

export class User implements IUser {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;

    constructor(data?: IUser) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.id = data["id"];
            this.name = data["name"];
            this.email = data["email"];
        }
    }

    static fromJS(data: any): User {
        data = typeof data === 'object' ? data : {};
        let result = new User();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        data["email"] = this.email;
        return data; 
    }
}

export interface IUser {
    id?: string | undefined;
    name?: string | undefined;
    email?: string | undefined;
}

export class CreateAccountServiceModel implements ICreateAccountServiceModel {
    name?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;

    constructor(data?: ICreateAccountServiceModel) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.name = data["name"];
            this.firstName = data["firstName"];
            this.lastName = data["lastName"];
            this.email = data["email"];
        }
    }

    static fromJS(data: any): CreateAccountServiceModel {
        data = typeof data === 'object' ? data : {};
        let result = new CreateAccountServiceModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["email"] = this.email;
        return data; 
    }
}

export interface ICreateAccountServiceModel {
    name?: string | undefined;
    firstName?: string | undefined;
    lastName?: string | undefined;
    email?: string | undefined;
}

export class CreateAccountCommandResponse implements ICreateAccountCommandResponse {
    validationIssues?: ValidationIssue[] | undefined;
    account?: Account | undefined;
    isSuccess?: boolean | undefined;
    message?: string | undefined;

    constructor(data?: ICreateAccountCommandResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["validationIssues"] && data["validationIssues"].constructor === Array) {
                this.validationIssues = [];
                for (let item of data["validationIssues"])
                    this.validationIssues.push(ValidationIssue.fromJS(item));
            }
            this.account = data["account"] ? Account.fromJS(data["account"]) : <any>undefined;
            this.isSuccess = data["isSuccess"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): CreateAccountCommandResponse {
        data = typeof data === 'object' ? data : {};
        let result = new CreateAccountCommandResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.validationIssues && this.validationIssues.constructor === Array) {
            data["validationIssues"] = [];
            for (let item of this.validationIssues)
                data["validationIssues"].push(item.toJSON());
        }
        data["account"] = this.account ? this.account.toJSON() : <any>undefined;
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        return data; 
    }
}

export interface ICreateAccountCommandResponse {
    validationIssues?: ValidationIssue[] | undefined;
    account?: Account | undefined;
    isSuccess?: boolean | undefined;
    message?: string | undefined;
}

export class ValidationIssue implements IValidationIssue {
    propertyName?: string | undefined;
    propertyFailures?: string[] | undefined;

    constructor(data?: IValidationIssue) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            this.propertyName = data["propertyName"];
            if (data["propertyFailures"] && data["propertyFailures"].constructor === Array) {
                this.propertyFailures = [];
                for (let item of data["propertyFailures"])
                    this.propertyFailures.push(item);
            }
        }
    }

    static fromJS(data: any): ValidationIssue {
        data = typeof data === 'object' ? data : {};
        let result = new ValidationIssue();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["propertyName"] = this.propertyName;
        if (this.propertyFailures && this.propertyFailures.constructor === Array) {
            data["propertyFailures"] = [];
            for (let item of this.propertyFailures)
                data["propertyFailures"].push(item);
        }
        return data; 
    }
}

export interface IValidationIssue {
    propertyName?: string | undefined;
    propertyFailures?: string[] | undefined;
}

export class BaseResponse implements IBaseResponse {
    validationIssues?: ValidationIssue[] | undefined;
    isSuccess?: boolean | undefined;
    message?: string | undefined;

    constructor(data?: IBaseResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(data?: any) {
        if (data) {
            if (data["validationIssues"] && data["validationIssues"].constructor === Array) {
                this.validationIssues = [];
                for (let item of data["validationIssues"])
                    this.validationIssues.push(ValidationIssue.fromJS(item));
            }
            this.isSuccess = data["isSuccess"];
            this.message = data["message"];
        }
    }

    static fromJS(data: any): BaseResponse {
        data = typeof data === 'object' ? data : {};
        let result = new BaseResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        if (this.validationIssues && this.validationIssues.constructor === Array) {
            data["validationIssues"] = [];
            for (let item of this.validationIssues)
                data["validationIssues"].push(item.toJSON());
        }
        data["isSuccess"] = this.isSuccess;
        data["message"] = this.message;
        return data; 
    }
}

export interface IBaseResponse {
    validationIssues?: ValidationIssue[] | undefined;
    isSuccess?: boolean | undefined;
    message?: string | undefined;
}

export enum OrderBy {
    Name = "Name", 
    NameKey = "NameKey", 
    CreatedDate = "CreatedDate", 
}

export enum OrderDirection {
    ASC = "ASC", 
    DESC = "DESC", 
}

export enum OrderBy2 {
    Name = "Name", 
    NameKey = "NameKey", 
    CreatedDate = "CreatedDate", 
}

export enum OrderDirection2 {
    ASC = "ASC", 
    DESC = "DESC", 
}

export class SwaggerException extends Error {
    message: string;
    status: number; 
    response: string; 
    headers: { [key: string]: any; };
    result: any; 

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if(result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader(); 
            reader.onload = event => { 
                observer.next((<any>event.target).result);
                observer.complete();
            };
            reader.readAsText(blob); 
        }
    });
}