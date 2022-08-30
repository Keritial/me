/* eslint-disable no-console */
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class Logger {
	private handle(level: LogLevel, args: any[]): any[] {
		return [`[KRTL] [${Date.now()}] [${level}]`, ...args];
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
