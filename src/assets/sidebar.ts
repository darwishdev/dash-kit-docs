export default [
    {
        key: "1", label: "Getting Started", icon: "home", to: null,
        items: [
            { key: "1.0", label: "Introduction", icon: "info", to: "/getting-started/installation" },
            { key: "1.2", label: "Configuration", icon: "settings", to: "/getting-started/configuration" },
        ]
    },
    {
        key: "2", label: "Components", icon: "cards", to: null,
        items: [
            {
                key: "2.0", label: "Forms", icon: "post_add", to: null,
                items: [
                    { key: "2.0.0", label: "Input Permissions", icon: "group", to: "/forms/input-permissions" },
                    { key: "2.0.1", label: "Input File", icon: "upload_file", to: "/forms/input-file" },
                    { key: "2.0.2", label: "Form Create", icon: "save", to: "/forms/form-create" },
                    { key: "2.0.3", label: "Form Update", icon: "edit_document", to: "/forms/form-update" },
                    { key: "2.0.4", label: "Form Filter", icon: "filter_alt", to: "/forms/form-filter" },
                    { key: "2.0.5", label: "Form Loading", icon: "progress_activity", to: "/forms/form-loading" },
                    { key: "2.0.6", label: "Form Error", icon: "feedback", to: "/forms/form-error" },
                ]
            },
            {
                key: "2.1", label: "Base", icon: "foundation", to: null,
                items: [
                    { key: "2.1.0", label: "App Layout", icon: "dashboard", to: "/base/app-layout" },
                    { key: "2.1.1", label: "App Nav", icon: "toolbar", to: "/base/app-nav" },
                    { key: "2.1.2", label: "App Menu", icon: "side_navigation", to: "/base/app-menu" },
                    { key: "2.1.3", label: "App Card", icon: "badge", to: "/base/app-card" },
                    { key: "2.1.4", label: "App CRUD", icon: "table", to: "/base/app-crud" },
                    { key: "2.1.5", label: "Icon Btn", icon: "emoji_symbols", to: "/base/icon-btn" },
                ]
            },
        ]
    },
    {
        key: "3", label: "Composables", icon: "component_exchange", to: null,
        items: [
            { key: "3.0", label: "Data Fetcher List", icon: "list_alt", to: "/composables/data-fetcher-list" },
            { key: "3.1", label: "Data Fetcher Find", icon: "feature_search", to: "/composables/data-fetcher-find" },
            { key: "3.2", label: "Delete Restore Dialog", icon: "delete", to: "/composables/delete-restore-dialog" },
            { key: "3.3", label: "Dialog Update", icon: "edit_note", to: "/composables/dialog-update" },
            { key: "3.4", label: "Dialog Create", icon: "add_circle", to: "/composables/dialog-create" },
        ]
    },
    {
        key: "4", label: "Helpers", icon: "help", to: null,
        items: [
            { key: "4.0", label: "FormFactory", icon: "factory", to: "/helpers/form-factory" },
            // { key: "4.1", label: "Filter", icon: "filter_alt", to: "/helpers/filter" },
            { key: "4.2", label: "handleSuccessToast", icon: "done_all", to: "/helpers/handle-success-toast" },
            { key: "4.3", label: "getRouteVariation", icon: "route", to: "/helpers/get-route-variation" },
            { key: "4.4", label: "parseDate", icon: "calendar_month", to: "/helpers/parse-date" },
            { key: "4.5", label: "Can", icon: "passkey", to: "/helpers/can" },
            { key: "4.6", label: "authMiddleware", icon: "verified_user", to: "/helpers/auth-middleware" },
            { key: "4.7", label: "ExportCSV", icon: "download", to: "/helpers/export-csv" },
            { key: "4.8", label: "ParseFile", icon: "edit", to: "/helpers/parse-file" },
        ]
    },
    { key: "5", label: "Contribution", icon: "link", to: "/contribution" },
]
