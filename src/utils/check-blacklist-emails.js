import defaultBlockList from './data/hubspot-blacklist.json';

const checkBlacklistEmails = (field) => {
  const { useDefaultBlockList, data } = field.validation;
  const emailBlacklist = useDefaultBlockList ? defaultBlockList : [];

  if (data) {
    String(data)
      .replace(/\s/g, '')
      .split(',')
      .forEach((domain) => emailBlacklist.push(domain));
  }

  return {
    name: 'domain-not-blacklisted',
    exclusive: true,
    message: `Ooops! Only work email addresses allowed. If this is a personal address, please email <a href="mailto:servbit.in@gmail.com">servbit.in@gmail.com</a> instead.`,
    test: (value) => {
      const domain = value.split('@')[1];
      return !emailBlacklist.includes(domain);
    },
  };
};

export { checkBlacklistEmails };
