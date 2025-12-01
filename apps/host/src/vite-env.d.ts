// src/vite-env.d.ts
/// <reference types="vite/client" />
/// <reference types="@originjs/vite-plugin-federation/types" />

interface ImportMetaEnv {
  readonly VITE_WP_API_BASE: string;
  readonly VITE_WP_BASE: string;
  readonly VITE_WP_POSTS_PATH: string;
  readonly VITE_WP_ACF_POSTS_PATH: string;
  readonly VITE_PROJECTS_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Module Federation types
declare module 'projects/App' {
  import { FC } from 'react';
  interface ProjectsContainerProps {
    projectId: string;
  }
  const ProjectsContainer: FC<ProjectsContainerProps>;
  export default ProjectsContainer;
}

declare module 'projects/Test' {
  const TestComponent: () => JSX.Element;
  export default TestComponent;
}
