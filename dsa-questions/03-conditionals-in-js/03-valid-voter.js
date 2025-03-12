function checkVoterEligibility(name, age) {
  return age >= 18
    ? `${name} is a valid voter.`
    : `${name} is not a valid voter.`;
}

module.exports = { checkVoterEligibility };
