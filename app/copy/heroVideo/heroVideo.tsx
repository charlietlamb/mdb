import {WhoTypeHome} from '~/data/who/types/WhoType';

export type CopyType = Record<WhoTypeHome, any>;

export const heroVideo: CopyType = {
  home: {
    heading: (
      <h1 className="text-primary-900 h1-size font-bold">
        Create Your Own Melody
      </h1>
    ),
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">someone you love</span>
      </p>
    ),
  },
  daughter: {
    heading: (
      <h1 className="text-primary-900 h1-size font-bold">
        Find it hard putting your love for your daughter into words?,
      </h1>
    ),

    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your daughter</span>
      </p>
    ),
  },
  mother: {
    heading: (
      <h1 className="text-primary-900 h1-size flex flex-col font-bold">
        Make your mother cry
        <span className="text-accent-500 md:text-3xl lg:text-5xl text-2xl">
          (in a good way)
        </span>
      </h1>
    ),
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your mother</span>
      </p>
    ),
  },
  partner: {
    heading: (
      <h1 className="text-primary-900 h2-size flex flex-col font-bold">
        Want to show them you remembered?
        <span className="text-accent-500 md:text-2xl lg:text-3xl sm:text-xl text-lg">
          (Tell us your memories, our artists have you covered)
        </span>
      </h1>
    ),
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your partner</span>
      </p>
    ),
  },
  girlfriend: {
    heading: (
      <h1 className="text-primary-900 h2-size flex flex-col font-bold">
        Bring her back to the time you first met
        <span className="text-accent-500 md:text-2xl lg:text-3xl sm:text-xl text-lg">
          (Our artists will help you get there)
        </span>
      </h1>
    ),
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your girlfriend</span>
      </p>
    ),
  },
  friend: {
    heading: (
      <h1 className="text-primary-900 h2-size flex flex-col font-bold">
        It's not easy telling your friend you love them
        <span className="text-accent-500 md:text-2xl lg:text-3xl text-xl">
          (Let us do it for you)
        </span>
      </h1>
    ),
    subHeading: (
      <p className="text-primary-700 h3-size">
        Get a one of a kind song for{' '}
        <span className="text-accent-500">your friend</span>
      </p>
    ),
  },
};
