export const LISTENER_CMDS = {
	API: "API",
	GET_CONTEXT: "GET_CONTEXT",
	RETURN: "RETURN",

	//Forms SDK Functions
	GET_FORM_FIELD: "GET_FORM_FIELD",
	UPDATE_FORM: "UPDATE_FORM",
	GET_TABLE: "GET_TABLE",
	GET_TABLE_ROW: "GET_TABLE_ROW",
	ADD_TABLE_ROW: "ADD_TABLE_ROW",
	DELETE_TABLE_ROW: "DELETE_TABLE_ROW",
	TO_JSON: "TO_JSON",
	GET_TABLE_ROWS: "GET_TABLE_ROWS",

	//Client SDK functions
	MESSAGE: "MESSAGE",
	CONFIRM: "CONFIRM",
	ALERT: "ALERT",
	REDIRECT: "REDIRECT",
	OPEN_PAGE: "OPEN_PAGE",

	//Formatter SDK Functions
	FORMAT_DATE: "FORMAT_DATE",
	FORMAT_DATE_TIME: "FORMAT_DATE_TIME",
	FORMAT_NUMBER: "FORMAT_NUMBER",
	FORMAT_CURRENCY: "FORMAT_CURRENCY",
	FORMAT_BOOLEAN: "FORMAT_BOOLEAN",

	//Application SDK functions
	GET_APP_VARIABLE: "GET_APP_VARIABLE",
	SET_APP_VARIABLE: "SET_APP_VARIABLE",

	//Application page sdk functions
	GET_PAGE_VARIABLE: "GET_PAGE_VARIABLE",
	SET_PAGE_VARIABLE: "SET_PAGE_VARIABLE",
	GET_PAGE_PARAMS: "GET_PAGE_PARAMS",
	GET_ALL_PAGE_PARAMS: "GET_ALL_PAGE_PARAMS",
	PAGE_ON_CLOSE: "PAGE_ON_CLOSE",
	OPEN_POPUP: "OPEN_POPUP",

	//Popup sdk functions
	GET_POPUP_PARAMS: "GET_POPUP_PARAMS",
	GET_ALL_POPUP_PARAMS: "GET_ALL_POPUP_PARAMS",
	CLOSE_POPUP: "CLOSE_POPUP",

	COMPONENT_GET: "COMPONENT_GET",
	COMPONENT_REFRESH: "COMPONENT_REFRESH",
	COMPONENT_SHOW: "COMPONENT_SHOW",
	COMPONENT_HIDE: "COMPONENT_HIDE",
	COMPONENT_ADD_EVENT_LISTENER: "COMPONENT_ADD_EVENT_LISTENER",

	// CC Refers to custom components
	CC_INITIALIZE: "CC_INITIALIZE",
	CC_WATCH_PARAMS: "CC_WATCH_PARAMS",

	// Window NDEF READER commands
	WINDOW_NDEF_READER_NEW: "WINDOW_NDEF_READER_NEW",
	WINDOW_NDEF_READER_SCAN: "WINDOW_NDEF_READER_SCAN",
	WINDOW_NDEF_READER_WRITE: "WINDOW_NDEF_READER_WRITE",
	WINDOW_NDEF_READER_ADD_EVENT_LISTENER:
		"WINDOW_NDEF_READER_ADD_EVENT_LISTENER",
	WINDOW_NDEF_READER_MAKE_READONLY: "WINDOW_NDEF_READER_MAKE_READONLY",
	WINDOW_NDEF_READER_ABORT_SCAN: "WINDOW_NDEF_READER_ABORT_SCAN"
};

export const EVENT_TYPES = {
	COMPONENT_ON_MOUNT: "componentOnMount",
	CC_ON_PARAMS_CHANGE: "onCustomComponentParamsChange"
};

export const DEFAULTS = {
	POPUP_ID: "ACTIVE_POP_UP"
};

