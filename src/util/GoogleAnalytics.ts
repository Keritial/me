import { config } from "src/environments/config";

export function enableGoogleAnalytics(): void {
	document.head.append(
		`<script defer src="https://www.googletagmanager.com/gtag/js?id=${config.googleAnalytics.id}"></script>`,
		`<script>
			globalThis.dataLayer ??= [];
			globalThis.gtag = (...args) => {
				dataLayer.push(args);
			};
			gtag("js", new Date());

			gtag("config", "${config.googleAnalytics.id}");
		</script>`
	);
}
