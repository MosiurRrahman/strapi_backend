import type { Schema, Attribute } from '@strapi/strapi';

export interface LayoutSectionLayout extends Schema.Component {
  collectionName: 'components_layout_section_layouts';
  info: {
    displayName: 'Section Info';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    section_subtitle: Attribute.String;
    short_description: Attribute.String;
  };
}

export interface ComponentsSolutionSection extends Schema.Component {
  collectionName: 'components_components_solution_sections';
  info: {
    displayName: 'Solution Section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentsServiceComponent extends Schema.Component {
  collectionName: 'components_components_service_components';
  info: {
    displayName: 'Service Component';
    description: '';
  };
  attributes: {
    services: Attribute.Relation<
      'components.service-component',
      'oneToMany',
      'api::service.service'
    >;
    title: Attribute.String;
    sub_title: Attribute.String;
    short_description: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'layout.section-layout': LayoutSectionLayout;
      'components.solution-section': ComponentsSolutionSection;
      'components.service-component': ComponentsServiceComponent;
    }
  }
}
