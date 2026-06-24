import { t as Route$1 } from "./__root-DjtLlHCu.js";
import { createFileRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-ffnB-mJn.js");
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Happy Birthday ✦ Aarohi" },
		{
			name: "description",
			content: "A long, dreamy, animated birthday wish, handcrafted with pink lights and falling letters."
		},
		{
			property: "og:title",
			content: "Happy Birthday ✦"
		},
		{
			property: "og:description",
			content: "Scroll through a galaxy made just for you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
