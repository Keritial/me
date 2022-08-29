/* eslint-disable no-console */
import { Injectable } from "@angular/core";

import { Timestamp } from "./type";

@Injectable({
	providedIn: "root",
})
export class Logger {
	private handle(level: LogLevel, args: any[]): any[] {
		const log = {
			level,
			time: Date.now(),
			content: args,
		};
		return [`[KRTL] [${log.time}] [${log.level}]`, ...log.content];
	}
	constructor() {}
	log(...args: any[]): void {
		console.log(this.handle(LogLevel.DEBUG, args));
	}
}

export enum LogLevel {
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR",
	DEBUG = "DEBUG",
}
