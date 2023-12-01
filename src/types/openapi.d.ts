import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * loopback.Count
         */
        export interface LoopbackCount {
            count?: number;
        }
        /**
         * NewSite
         * (tsType: Omit<Site, 'id'>, schemaOptions: { title: 'NewSite', exclude: [ 'id' ] })
         */
        export interface NewSite {
            name: string;
            url: string;
            max_depth: number;
            frequency: string;
            document_extractor?: string;
        }
        /**
         * NewSubSite
         * (tsType: Omit<SubSite, 'id'>, schemaOptions: { title: 'NewSubSite', exclude: [ 'id' ] })
         */
        export interface NewSubSite {
            url: string;
            content?: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * NewSubSiteInSite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<SubSite, 'id'>, 'siteId'>, schemaOptions: { title: 'NewSubSiteInSite', exclude: [ 'id' ], optional: [ 'siteId' ] })
         */
        export interface NewSubSiteInSite {
            url: string;
            content?: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * PingResponse
         */
        export interface PingResponse {
            greeting?: string;
            date?: string;
            url?: string;
            headers?: {
                [name: string]: any;
                "Content-Type"?: string;
            };
        }
        /**
         * Site
         */
        export interface Site {
            id?: string;
            name: string;
            url: string;
            max_depth: number;
            frequency: string;
            document_extractor?: string;
        }
        /**
         * Site.Filter
         */
        export interface SiteFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Site.Fields
             */
            fields?: /* Site.Fields */ {
                id?: boolean;
                name?: boolean;
                url?: boolean;
                max_depth?: boolean;
                frequency?: boolean;
                document_extractor?: boolean;
            } | ("id" | "name" | "url" | "max_depth" | "frequency" | "document_extractor")[];
            /**
             * Site.IncludeFilter
             */
            include?: (/* Site.IncludeFilter.Items */ SiteIncludeFilterItems | string)[];
        }
        /**
         * Site.Filter
         */
        export interface SiteFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * Site.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * Site.Fields
             */
            fields?: /* Site.Fields */ {
                id?: boolean;
                name?: boolean;
                url?: boolean;
                max_depth?: boolean;
                frequency?: boolean;
                document_extractor?: boolean;
            } | ("id" | "name" | "url" | "max_depth" | "frequency" | "document_extractor")[];
            /**
             * Site.IncludeFilter
             */
            include?: (/* Site.IncludeFilter.Items */ SiteIncludeFilterItems | string)[];
        }
        /**
         * Site.IncludeFilter.Items
         */
        export interface SiteIncludeFilterItems {
            relation?: "subSites";
            scope?: /* Site.ScopeFilter */ SiteScopeFilter;
        }
        /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        export interface SitePartial {
            id?: string;
            name?: string;
            url?: string;
            max_depth?: number;
            frequency?: string;
            document_extractor?: string;
        }
        /**
         * Site.ScopeFilter
         */
        export interface SiteScopeFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            where?: {
                [name: string]: any;
            };
            fields?: {
                [name: string]: any;
            } | string[];
            include?: {
                [name: string]: any;
            }[];
        }
        /**
         * SiteWithRelations
         * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SiteWithRelations {
            id?: string;
            name: string;
            url: string;
            max_depth: number;
            frequency: string;
            document_extractor?: string;
            subSites?: /**
             * SubSiteWithRelations
             * (tsType: SubSiteWithRelations, schemaOptions: { includeRelations: true })
             */
            SubSiteWithRelations[];
        }
        /**
         * SubSite
         */
        export interface SubSite {
            id?: string;
            url: string;
            content?: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * SubSite.Filter
         */
        export interface SubSiteFilter {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * SubSite.Fields
             */
            fields?: /* SubSite.Fields */ {
                id?: boolean;
                url?: boolean;
                content?: boolean;
                siteId?: boolean;
            } | ("id" | "url" | "content" | "siteId")[];
        }
        /**
         * SubSite.Filter
         */
        export interface SubSiteFilter1 {
            offset?: number;
            /**
             * example:
             * 100
             */
            limit?: number;
            skip?: number;
            order?: string | string[];
            /**
             * SubSite.WhereFilter
             */
            where?: {
                [name: string]: any;
            };
            /**
             * SubSite.Fields
             */
            fields?: /* SubSite.Fields */ {
                id?: boolean;
                url?: boolean;
                content?: boolean;
                siteId?: boolean;
            } | ("id" | "url" | "content" | "siteId")[];
        }
        /**
         * SubSitePartial
         * (tsType: Partial<SubSite>, schemaOptions: { partial: true })
         */
        export interface SubSitePartial {
            id?: string;
            url?: string;
            content?: {
                [key: string]: any;
            };
            siteId?: string;
        }
        /**
         * SubSiteWithRelations
         * (tsType: SubSiteWithRelations, schemaOptions: { includeRelations: true })
         */
        export interface SubSiteWithRelations {
            id?: string;
            url: string;
            content?: {
                [key: string]: any;
            };
            siteId?: string;
        }
    }
}
declare namespace Paths {
    namespace PingControllerGreet {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace PingControllerPing {
        namespace Responses {
            export type $200 = /* PingResponse */ Components.Schemas.PingResponse;
        }
    }
    namespace SiteControllerCount {
        namespace Parameters {
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteControllerCreate {
        export type RequestBody = /**
         * NewSite
         * (tsType: Omit<Site, 'id'>, schemaOptions: { title: 'NewSite', exclude: [ 'id' ] })
         */
        Components.Schemas.NewSite;
        namespace Responses {
            export type $200 = /* Site */ Components.Schemas.Site;
        }
    }
    namespace SiteControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * Site DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SiteControllerFind {
        namespace Parameters {
            export type Filter = /* Site.Filter */ Components.Schemas.SiteFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SiteWithRelations
             * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SiteWithRelations[];
        }
    }
    namespace SiteControllerFindById {
        namespace Parameters {
            export type Filter = /* Site.Filter */ Components.Schemas.SiteFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SiteWithRelations
             * (tsType: SiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SiteWithRelations;
        }
    }
    namespace SiteControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* Site */ Components.Schemas.Site;
        namespace Responses {
            /**
             * Site PUT success
             */
            export type $204 = any;
        }
    }
    namespace SiteControllerUpdateAll {
        namespace Parameters {
            /**
             * Site.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* Site.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * SitePartial
         * (tsType: Partial<Site>, schemaOptions: { partial: true })
         */
        Components.Schemas.SitePartial;
        namespace Responses {
            /**
             * Site PATCH success
             */
            export type $204 = any;
        }
    }
    namespace SiteSubSiteControllerCreate {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * NewSubSiteInSite
         * (tsType: @loopback/repository-json-schema#Optional<Omit<SubSite, 'id'>, 'siteId'>, schemaOptions: { title: 'NewSubSiteInSite', exclude: [ 'id' ], optional: [ 'siteId' ] })
         */
        Components.Schemas.NewSubSiteInSite;
        namespace Responses {
            export type $200 = /* SubSite */ Components.Schemas.SubSite;
        }
    }
    namespace SiteSubSiteControllerDelete {
        namespace Parameters {
            export type Id = string;
            /**
             * SubSite.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* SubSite.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SiteSubSiteControllerFind {
        namespace Parameters {
            export interface Filter {
                [name: string]: any;
            }
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /* SubSite */ Components.Schemas.SubSite[];
        }
    }
    namespace SiteSubSiteControllerPatch {
        namespace Parameters {
            export type Id = string;
            /**
             * SubSite.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            where?: /* SubSite.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SubSitePartial
         * (tsType: Partial<SubSite>, schemaOptions: { partial: true })
         */
        Components.Schemas.SubSitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SubSiteControllerCount {
        namespace Parameters {
            /**
             * SubSite.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* SubSite.WhereFilter */ Parameters.Where;
        }
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SubSiteControllerCreate {
        export type RequestBody = /**
         * NewSubSite
         * (tsType: Omit<SubSite, 'id'>, schemaOptions: { title: 'NewSubSite', exclude: [ 'id' ] })
         */
        Components.Schemas.NewSubSite;
        namespace Responses {
            export type $200 = /* SubSite */ Components.Schemas.SubSite;
        }
    }
    namespace SubSiteControllerDeleteById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        namespace Responses {
            /**
             * SubSite DELETE success
             */
            export type $204 = any;
        }
    }
    namespace SubSiteControllerFind {
        namespace Parameters {
            export type Filter = /* SubSite.Filter */ Components.Schemas.SubSiteFilter1;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SubSiteWithRelations
             * (tsType: SubSiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SubSiteWithRelations[];
        }
    }
    namespace SubSiteControllerFindById {
        namespace Parameters {
            export type Filter = /* SubSite.Filter */ Components.Schemas.SubSiteFilter;
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export interface QueryParameters {
            filter?: Parameters.Filter;
        }
        namespace Responses {
            export type $200 = /**
             * SubSiteWithRelations
             * (tsType: SubSiteWithRelations, schemaOptions: { includeRelations: true })
             */
            Components.Schemas.SubSiteWithRelations;
        }
    }
    namespace SubSiteControllerReplaceById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /* SubSite */ Components.Schemas.SubSite;
        namespace Responses {
            /**
             * SubSite PUT success
             */
            export type $204 = any;
        }
    }
    namespace SubSiteControllerUpdateAll {
        namespace Parameters {
            /**
             * SubSite.WhereFilter
             */
            export interface Where {
                [name: string]: any;
            }
        }
        export interface QueryParameters {
            where?: /* SubSite.WhereFilter */ Parameters.Where;
        }
        export type RequestBody = /**
         * SubSitePartial
         * (tsType: Partial<SubSite>, schemaOptions: { partial: true })
         */
        Components.Schemas.SubSitePartial;
        namespace Responses {
            export type $200 = /* loopback.Count */ Components.Schemas.LoopbackCount;
        }
    }
    namespace SubSiteControllerUpdateById {
        namespace Parameters {
            export type Id = string;
        }
        export interface PathParameters {
            id: Parameters.Id;
        }
        export type RequestBody = /**
         * SubSitePartial
         * (tsType: Partial<SubSite>, schemaOptions: { partial: true })
         */
        Components.Schemas.SubSitePartial;
        namespace Responses {
            /**
             * SubSite PATCH success
             */
            export type $204 = any;
        }
    }
}

export interface OperationMethods {
  /**
   * PingController.greet
   */
  'PingController.greet'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  /**
   * PingController.ping
   */
  'PingController.ping'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  /**
   * SiteController.count
   */
  'SiteController.count'(
    parameters?: Parameters<Paths.SiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerCount.Responses.$200>
  /**
   * SiteSubSiteController.find
   */
  'SiteSubSiteController.find'(
    parameters?: Parameters<Paths.SiteSubSiteControllerFind.PathParameters & Paths.SiteSubSiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteSubSiteControllerFind.Responses.$200>
  /**
   * SiteSubSiteController.create
   */
  'SiteSubSiteController.create'(
    parameters?: Parameters<Paths.SiteSubSiteControllerCreate.PathParameters> | null,
    data?: Paths.SiteSubSiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteSubSiteControllerCreate.Responses.$200>
  /**
   * SiteSubSiteController.patch
   */
  'SiteSubSiteController.patch'(
    parameters?: Parameters<Paths.SiteSubSiteControllerPatch.PathParameters & Paths.SiteSubSiteControllerPatch.QueryParameters> | null,
    data?: Paths.SiteSubSiteControllerPatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteSubSiteControllerPatch.Responses.$200>
  /**
   * SiteSubSiteController.delete
   */
  'SiteSubSiteController.delete'(
    parameters?: Parameters<Paths.SiteSubSiteControllerDelete.PathParameters & Paths.SiteSubSiteControllerDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteSubSiteControllerDelete.Responses.$200>
  /**
   * SiteController.findById
   */
  'SiteController.findById'(
    parameters?: Parameters<Paths.SiteControllerFindById.PathParameters & Paths.SiteControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerFindById.Responses.$200>
  /**
   * SiteController.replaceById
   */
  'SiteController.replaceById'(
    parameters?: Parameters<Paths.SiteControllerReplaceById.PathParameters> | null,
    data?: Paths.SiteControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerReplaceById.Responses.$204>
  /**
   * SiteController.updateById
   */
  'SiteController.updateById'(
    parameters?: Parameters<Paths.SiteControllerUpdateById.PathParameters> | null,
    data?: Paths.SiteControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerUpdateById.Responses.$204>
  /**
   * SiteController.deleteById
   */
  'SiteController.deleteById'(
    parameters?: Parameters<Paths.SiteControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerDeleteById.Responses.$204>
  /**
   * SiteController.find
   */
  'SiteController.find'(
    parameters?: Parameters<Paths.SiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerFind.Responses.$200>
  /**
   * SiteController.create
   */
  'SiteController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerCreate.Responses.$200>
  /**
   * SiteController.updateAll
   */
  'SiteController.updateAll'(
    parameters?: Parameters<Paths.SiteControllerUpdateAll.QueryParameters> | null,
    data?: Paths.SiteControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SiteControllerUpdateAll.Responses.$200>
  /**
   * SubSiteController.count
   */
  'SubSiteController.count'(
    parameters?: Parameters<Paths.SubSiteControllerCount.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerCount.Responses.$200>
  /**
   * SubSiteController.findById
   */
  'SubSiteController.findById'(
    parameters?: Parameters<Paths.SubSiteControllerFindById.PathParameters & Paths.SubSiteControllerFindById.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerFindById.Responses.$200>
  /**
   * SubSiteController.replaceById
   */
  'SubSiteController.replaceById'(
    parameters?: Parameters<Paths.SubSiteControllerReplaceById.PathParameters> | null,
    data?: Paths.SubSiteControllerReplaceById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerReplaceById.Responses.$204>
  /**
   * SubSiteController.updateById
   */
  'SubSiteController.updateById'(
    parameters?: Parameters<Paths.SubSiteControllerUpdateById.PathParameters> | null,
    data?: Paths.SubSiteControllerUpdateById.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerUpdateById.Responses.$204>
  /**
   * SubSiteController.deleteById
   */
  'SubSiteController.deleteById'(
    parameters?: Parameters<Paths.SubSiteControllerDeleteById.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerDeleteById.Responses.$204>
  /**
   * SubSiteController.find
   */
  'SubSiteController.find'(
    parameters?: Parameters<Paths.SubSiteControllerFind.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerFind.Responses.$200>
  /**
   * SubSiteController.create
   */
  'SubSiteController.create'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.SubSiteControllerCreate.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerCreate.Responses.$200>
  /**
   * SubSiteController.updateAll
   */
  'SubSiteController.updateAll'(
    parameters?: Parameters<Paths.SubSiteControllerUpdateAll.QueryParameters> | null,
    data?: Paths.SubSiteControllerUpdateAll.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SubSiteControllerUpdateAll.Responses.$200>
}

export interface PathsDictionary {
  ['/greet']: {
    /**
     * PingController.greet
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerGreet.Responses.$200>
  }
  ['/ping']: {
    /**
     * PingController.ping
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.PingControllerPing.Responses.$200>
  }
  ['/sites/count']: {
    /**
     * SiteController.count
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerCount.Responses.$200>
  }
  ['/sites/{id}/sub-sites']: {
    /**
     * SiteSubSiteController.create
     */
    'post'(
      parameters?: Parameters<Paths.SiteSubSiteControllerCreate.PathParameters> | null,
      data?: Paths.SiteSubSiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteSubSiteControllerCreate.Responses.$200>
    /**
     * SiteSubSiteController.patch
     */
    'patch'(
      parameters?: Parameters<Paths.SiteSubSiteControllerPatch.PathParameters & Paths.SiteSubSiteControllerPatch.QueryParameters> | null,
      data?: Paths.SiteSubSiteControllerPatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteSubSiteControllerPatch.Responses.$200>
    /**
     * SiteSubSiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.SiteSubSiteControllerFind.PathParameters & Paths.SiteSubSiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteSubSiteControllerFind.Responses.$200>
    /**
     * SiteSubSiteController.delete
     */
    'delete'(
      parameters?: Parameters<Paths.SiteSubSiteControllerDelete.PathParameters & Paths.SiteSubSiteControllerDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteSubSiteControllerDelete.Responses.$200>
  }
  ['/sites/{id}']: {
    /**
     * SiteController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.SiteControllerReplaceById.PathParameters> | null,
      data?: Paths.SiteControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerReplaceById.Responses.$204>
    /**
     * SiteController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.SiteControllerUpdateById.PathParameters> | null,
      data?: Paths.SiteControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerUpdateById.Responses.$204>
    /**
     * SiteController.findById
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerFindById.PathParameters & Paths.SiteControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerFindById.Responses.$200>
    /**
     * SiteController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.SiteControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerDeleteById.Responses.$204>
  }
  ['/sites']: {
    /**
     * SiteController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerCreate.Responses.$200>
    /**
     * SiteController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.SiteControllerUpdateAll.QueryParameters> | null,
      data?: Paths.SiteControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerUpdateAll.Responses.$200>
    /**
     * SiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.SiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SiteControllerFind.Responses.$200>
  }
  ['/sub-sites/count']: {
    /**
     * SubSiteController.count
     */
    'get'(
      parameters?: Parameters<Paths.SubSiteControllerCount.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerCount.Responses.$200>
  }
  ['/sub-sites/{id}']: {
    /**
     * SubSiteController.replaceById
     */
    'put'(
      parameters?: Parameters<Paths.SubSiteControllerReplaceById.PathParameters> | null,
      data?: Paths.SubSiteControllerReplaceById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerReplaceById.Responses.$204>
    /**
     * SubSiteController.updateById
     */
    'patch'(
      parameters?: Parameters<Paths.SubSiteControllerUpdateById.PathParameters> | null,
      data?: Paths.SubSiteControllerUpdateById.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerUpdateById.Responses.$204>
    /**
     * SubSiteController.findById
     */
    'get'(
      parameters?: Parameters<Paths.SubSiteControllerFindById.PathParameters & Paths.SubSiteControllerFindById.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerFindById.Responses.$200>
    /**
     * SubSiteController.deleteById
     */
    'delete'(
      parameters?: Parameters<Paths.SubSiteControllerDeleteById.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerDeleteById.Responses.$204>
  }
  ['/sub-sites']: {
    /**
     * SubSiteController.create
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.SubSiteControllerCreate.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerCreate.Responses.$200>
    /**
     * SubSiteController.updateAll
     */
    'patch'(
      parameters?: Parameters<Paths.SubSiteControllerUpdateAll.QueryParameters> | null,
      data?: Paths.SubSiteControllerUpdateAll.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerUpdateAll.Responses.$200>
    /**
     * SubSiteController.find
     */
    'get'(
      parameters?: Parameters<Paths.SubSiteControllerFind.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SubSiteControllerFind.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>
