/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar:[
    "intro",
    {
      type: 'category',
      label: 'Disk Image',
      items: ["disk-image/rhel_disk_image"]
    },
    {
      type: 'category',
      label: 'NCM Self Service',
      items: ["calm/delete_project_existing_app"]
    },
  ],
};

export default sidebars;