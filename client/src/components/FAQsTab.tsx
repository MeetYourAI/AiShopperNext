'use client';

import Accordion from '@/components/Accordion';
import { FAQsData } from '@/data/content';

const FAQsTab = () => {
  return (
    <div className="">
      <div className="divide-y divide-primary/15 dark:divide-white/15">
        {FAQsData.faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className={` space-y-10 border-primary/15 first:border-t last:border-b dark:border-white/15`}
          >
            <Accordion {...faq} key={faq.question} idx={idx} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsTab;
