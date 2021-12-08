/** @type {import('@docusaurus/types').DocusaurusConfig} */

const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
	title: "MFAM CS 스터디",
	tagline: "CS 기본 지식 공부를 위한 홈페이지입니다.",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	baseUrlIssueBanner: true,
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.
	stylesheets: [
		{
			href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
			type: "text/css",
			integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
			crossorigin: "anonymous",
		},
	],
	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			/** @type {import('@docusaurus/plugin-content-docs').Options} */
			({
				id: "interview",
				path: "interview",
				routeBasePath: "interview",
				editUrl: ({ locale, versionDocsDirPath, docPath }) => {
					if (locale !== "en") {
						return `https://crowdin.com/project/docusaurus-v2/${locale}`;
					}
					return `https://github.com/facebook/docusaurus/edit/main/website/${versionDocsDirPath}/${docPath}`;
				},
				editCurrentVersion: true,
				sidebarPath: require.resolve("./sidebarInterview.js"),
				showLastUpdateAuthor: true,
				showLastUpdateTime: true,
			}),
		],
	],
	themeConfig: {
		metadata: [{ name: "keywords", content: "developer,computer science,interview" }],
		prism: {
			additionalLanguages: ["java"],
		},
		navbar: {
			title: "CS 스터디",
			logo: {
				alt: "My Site Logo",
				src: "img/logo.svg",
			},
			items: [
				{
					type: "doc",
					docId: "intro",
					position: "left",
					label: "CS 스터디",
				},
				{
					to: "/interview/intro",
					label: "면접 후기",
					position: "left",
					activeBaseRegex: `/interview/`,
				},
				{
					href: "https://github.com/MLifeFam/cs_interview",
					label: "GitHub",
					position: "right",
				},
			],
		},
		footer: {
			style: "dark",
			links: [
				{
					title: "Docs",
					items: [
						{
							label: "CS 스터디",
							to: "/docs/intro",
						},
						{
							label: "면접 후기",
							to: "/interview/intro",
						},
					],
				},
				{
					title: "참고 사이트",
					items: [
						{
							label: "Ready-For-Tech-Interview",
							href: "https://github.com/WooVictory/Ready-For-Tech-Interview",
						},
						{
							label: "Interview_Question_for_Beginner",
							href: "https://github.com/JaeYeopHan/Interview_Question_for_Beginner",
						},
						{
							label: "tech-interview-for-developer",
							href: "https://github.com/gyoogle/tech-interview-for-developer",
						},
					],
				},
				{
					title: "More",
					items: [
						{
							label: "GitHub",
							href: "https://github.com/MLifeFam/cs_interview",
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} MFAM Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			"@docusaurus/preset-classic",
			{
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/facebook/docusaurus/edit/master/website/",
					remarkPlugins: [math],
					rehypePlugins: [katex],
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/facebook/docusaurus/edit/master/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			},
		],
	],
};
