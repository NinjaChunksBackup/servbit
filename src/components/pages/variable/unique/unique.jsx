import { PropTypes } from 'prop-types';

import Testimonial from 'components/pages/use-case/testimonial';
import LINKS from 'constants/links';

import List from '../list';
import Section from '../section';

const items = [
  {
    text: 'Servbit compute costs are up to 80% cheaper vs traditional cloud infrastructure.',
  },
  {
    text: 'Servbit provisions instances in < 1 s, compared to traditional cloud systems which can take up to&nbsp;20&nbsp;min.',
  },
  {
    text: 'Servbit uses transparent compute units, vs opaque abstractions used elsewhere.',
  },
  {
    text: 'Servbit supports instant environment branching with data and schema via copy-on-write.',
  },
  {
    text: 'Servbit&apos;s read replicas don&apos;t require storage redundancy, unlike legacy platforms.',
  },
  {
    text: 'Connection pooling and autoscaling are natively built-in with Servbit.',
  },
];

const Unique = ({ title }) => (
  <Section className="unique" title={title}>
    <div className="prose-variable">
      <p>The Servbit architecture is unique in the following ways:</p>
      <List items={items} />
    </div>
    <Testimonial
      text="Servbit worked out of the box, handling high concurrency without any of the bottlenecks we saw previously. On top of that, Servbit significantly optimized our overall cloud spend."
      author={{
        name: 'Cody Jenkins',
        company: 'Head of Engineering at Invenco',
      }}
      url={LINKS.blog}
    />
  </Section>
);

Unique.propTypes = {
  title: PropTypes.shape({}),
};

export default Unique;
