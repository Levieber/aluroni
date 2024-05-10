import RootLayout from "@/components/layout/root-layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		Component: RootLayout,
		children: [
			{
				path: "/",
				lazy: async () => ({
					Component: (await import("@/components/layout/banner-layout"))
						.default,
				}),
				children: [
					{
						index: true,
						lazy: async () => ({
							Component: (await import("@/pages/home")).default,
						}),
					},
					{
						path: "menu",
						lazy: async () => ({
							Component: (await import("@/pages/menu")).default,
						}),
					},
					{
						path: "about",
						lazy: async () => ({
							Component: (await import("@/pages/about")).default,
						}),
					},
					{
						index: true,
						lazy: async () => ({
							Component: (await import("@/pages/home")).default,
						}),
					},
				],
			},
			{
				path: "/dish/:id",
				lazy: async () => ({
					Component: (await import("@/pages/dish")).default,
				}),
			},
			{
				path: "*",
				lazy: async () => ({
					Component: (await import("@/pages/not-found")).default,
				}),
			},
		],
	},
]);

export default router;
