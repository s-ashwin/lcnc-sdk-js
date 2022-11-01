import { BaseSDK } from "./base";
import { Form } from "./form";
import { TableForm } from "./form";
import { Client } from "./client";
import { Formatter } from "./formatter";
import { Application } from "./app";
import { Page } from "./page";
import { Component } from "./component";
import { Popup } from "./popup";

import { SDKContext } from "./types/internal";
import { userObject, accountObject, environmentObject } from "./types/external";

class LowcodeSDK extends BaseSDK {
	context: Component | Form | TableForm | Page | Popup;
	client: Client;
	formatter: Formatter;
	app: Application;
	user: userObject;
	env: environmentObject;
	account: accountObject;
	#csrfToken: string;

	constructor(props: SDKContext) {
		super({});
		if (props.tableId && props.tableRowId) {
			this.context = new TableForm(
				props.formInstanceId,
				props.tableId,
				props.tableRowId
			);
		} else if (props.formInstanceId) {
			this.context = new Form(props.formInstanceId);
		} else if (props.popupId) {
			this.context = new Popup(props);
		} else if (props.pageId && !props.componentId) {
			this.context = new Page(props);
		} else if (props.componentId) {
			this.context = new Component(props);
		}
		this.client = new Client({});
		this.formatter = new Formatter({});
		if (props.appId) {
			this.app = new Application(props);
		}
		this.user = props.user;
		this.env = props.envDetails;
		this.account = props.account;
		this.#csrfToken = props.csrfToken;
	}
	async api(
		url: string,
		args?: {
			headers: object;
		}
	) {
		const response = await globalThis.fetch(url, {
			...args,
			headers: {
				...(args?.headers || {}),
				"X-Csrf-Token": this.#csrfToken
			}
		});
		const contentType = response.headers.get("content-type");
		if (contentType && contentType.includes("application/json")) {
			return await response.json();
		} else {
			return response;
		}
	}
}

function initSDK(config: SDKContext): LowcodeSDK {
	return new LowcodeSDK(config);
}

export default initSDK;
