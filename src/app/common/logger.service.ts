/* eslint-disable no-console */
import { Injectable } from "@angular/core";

import { Timestamp } from "./type";

@Injectable({
	providedIn: "root",
})
export class Logger {
	private takeExecllentCareOfEverySingleLogRespectfully(log: Log): void {
		this.history.push(log);
	}
	private handle(level: LogLevel, args: any[]): any[] {
		const log = {
			level,
			time: Date.now(),
			content: args,
		};
		this.takeExecllentCareOfEverySingleLogRespectfully(log);
		return [`[KRTL] [${log.time}] [${log.level}]`, ...log.content];
	}
	constructor() {}
	log(...args: any[]): void {
		console.log(this.handle(LogLevel.DEBUG, args));
	}
	history: Log[] = [];
	latest(): string {
		return this.history
			.map(l => `[${l.level}] [${l.time}] ${l.content.map(String)}`)
			.join("\n");
	}
}

export enum LogLevel {
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR",
	DEBUG = "DEBUG",
}

export interface Log {
	level: LogLevel;
	time: Timestamp;
	content: any[];
}
