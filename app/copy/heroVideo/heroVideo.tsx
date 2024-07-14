import {WhoTypeHome} from '~/data/who/types/WhoType';

export type CopyType = Record<WhoTypeHome, any>;

export const heroVideo: CopyType = {
  home: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">someone you love</span>
      </p>
    ),
  },
  daughter: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your daughter</span>
      </p>
    ),
  },
  mother: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your mother</span>
      </p>
    ),
  },
  partner: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your partner</span>
      </p>
    ),
  },
  girlfriend: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your girlfriend</span>
      </p>
    ),
  },
  friend: {
    heading: 'Create Your Own Melody',
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your friend</span>
      </p>
    ),
  },
};
