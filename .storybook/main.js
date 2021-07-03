module.exports = {
    "stories": [
        "../docs/**/*.stories.mdx",
        "../docs/**/*.stories.@(js|jsx|ts|tsx)",
        "../packages/**/*.stories.mdx",
        "../packages/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
    ]
}