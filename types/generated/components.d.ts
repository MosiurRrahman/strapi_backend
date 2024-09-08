import type { Schema, Attribute } from '@strapi/strapi';

export interface PartnerLogoPartner extends Schema.Component {
  collectionName: 'components_partner_logo_partners';
  info: {
    displayName: 'partner';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface HomePageSectionWorkSection extends Schema.Component {
  collectionName: 'components_home_page_section_work_sections';
  info: {
    displayName: 'work section';
    description: '';
  };
  attributes: {
    work_card: Attribute.Component<'components.work-card', true>;
    name: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'components.link'>;
  };
}

export interface HomePageSectionTestimonialSection extends Schema.Component {
  collectionName: 'components_home_page_section_testimonial_sections';
  info: {
    displayName: 'testimonial section';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    testimonial_card: Attribute.Component<'components.testimonial-card', true>;
  };
}

export interface HomePageSectionSolutionSection extends Schema.Component {
  collectionName: 'components_home_page_section_solution_sections';
  info: {
    displayName: 'solution section';
    description: '';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    solution_accrodions: Attribute.Component<
      'components.solution-accrodion',
      true
    >;
  };
}

export interface HomePageSectionProcessSection extends Schema.Component {
  collectionName: 'components_home_page_section_process_sections';
  info: {
    displayName: 'Process section';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    process_item: Attribute.Component<'components.process-item', true>;
  };
}

export interface HomePageSectionBLogSection extends Schema.Component {
  collectionName: 'components_home_page_section_b_log_sections';
  info: {
    displayName: 'BLog Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'components.link'>;
    blog_card: Attribute.Component<'components.blog-card', true>;
  };
}

export interface HomePageSectionAwardSection extends Schema.Component {
  collectionName: 'components_home_page_section_award_sections';
  info: {
    displayName: 'Award Section';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    award_list: Attribute.Component<'components.award-list', true>;
  };
}

export interface HeroSectionHeroSection extends Schema.Component {
  collectionName: 'components_hero_section_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media<'images'>;
    video_link: Attribute.String;
    success_rate: Attribute.String;
  };
}

export interface AboutSectionAbout extends Schema.Component {
  collectionName: 'components_about_section_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.String;
    link: Attribute.Component<'components.link'>;
    image: Attribute.Component<'components.image', true>;
    counter: Attribute.Component<'components.counter', true>;
  };
}

export interface ComponentsWorkCard extends Schema.Component {
  collectionName: 'components_components_work_cards';
  info: {
    displayName: 'work_card';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.Enumeration<['Web Design', 'Development', 'Software']>;
    link: Attribute.String;
    button_url: Attribute.String;
    name: Attribute.String;
  };
}

export interface ComponentsTestimonialCard extends Schema.Component {
  collectionName: 'components_components_testimonial_cards';
  info: {
    displayName: 'testimonial_card';
  };
  attributes: {
    author_name: Attribute.String;
    designation: Attribute.String;
    tag: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentsSolutionAccrodion extends Schema.Component {
  collectionName: 'components_components_solution_accrodions';
  info: {
    displayName: 'solution_accrodion';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.Enumeration<
      [
        'Banners',
        'Logos',
        'Infographics',
        'Visiting Card',
        'Brochure',
        'Printing'
      ]
    >;
    description: Attribute.String;
  };
}

export interface ComponentsProcessItem extends Schema.Component {
  collectionName: 'components_components_process_items';
  info: {
    displayName: 'process_item';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    icon: Attribute.Media<'images'>;
    process_list: Attribute.Enumeration<
      [
        'Initial Consultation.',
        'Market Research.',
        'Strategic Planning.',
        'Wireframing',
        'Design Mockups.',
        'Implementation.',
        'Design Implementation.',
        'Testing & Fixing.',
        'Product Launch'
      ]
    >;
  };
}

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    name: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean;
  };
}

export interface ComponentsImage extends Schema.Component {
  collectionName: 'components_components_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentsCounter extends Schema.Component {
  collectionName: 'components_components_counters';
  info: {
    displayName: 'counter';
  };
  attributes: {
    name: Attribute.String;
    count_number: Attribute.String;
  };
}

export interface ComponentsBlogCard extends Schema.Component {
  collectionName: 'components_components_blog_cards';
  info: {
    displayName: 'blog card';
  };
  attributes: {
    category: Attribute.String;
    title: Attribute.String;
    description: Attribute.RichText;
    author_name: Attribute.String;
  };
}

export interface ComponentsAwardList extends Schema.Component {
  collectionName: 'components_components_award_lists';
  info: {
    displayName: 'award_list';
  };
  attributes: {
    award_name: Attribute.String;
    platform: Attribute.String;
    year: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'partner-logo.partner': PartnerLogoPartner;
      'home-page-section.work-section': HomePageSectionWorkSection;
      'home-page-section.testimonial-section': HomePageSectionTestimonialSection;
      'home-page-section.solution-section': HomePageSectionSolutionSection;
      'home-page-section.process-section': HomePageSectionProcessSection;
      'home-page-section.b-log-section': HomePageSectionBLogSection;
      'home-page-section.award-section': HomePageSectionAwardSection;
      'hero-section.hero-section': HeroSectionHeroSection;
      'about-section.about': AboutSectionAbout;
      'components.work-card': ComponentsWorkCard;
      'components.testimonial-card': ComponentsTestimonialCard;
      'components.solution-accrodion': ComponentsSolutionAccrodion;
      'components.process-item': ComponentsProcessItem;
      'components.link': ComponentsLink;
      'components.image': ComponentsImage;
      'components.counter': ComponentsCounter;
      'components.blog-card': ComponentsBlogCard;
      'components.award-list': ComponentsAwardList;
    }
  }
}
