import _ from 'lodash';

function generateText() {
  return `
    Rank the following anime in popularity from highest to lowest.
  `;
}

/**
 * Generates a new Ranking-type question.
 * A "Ranking" question involves the user sorting their choices to fit
 * a sorted criteria.
 *
 * @param selectedSeries - An array of series.
 * @param sortBy - A string in what manner you want the criteria and answer to be sorted by.
 * @returns {{type: string, text: string, content: {sortBy: *, choices: Array}, answer: Array}}
 *          A question object with ranking-specific criteria.
 */
function generateRankingQuestion(selectedSeries, sortBy) {
  const series = _.chain(selectedSeries)
    .shuffle()
    .take(4)
    .value();

  const choices = _.chain(series)
    .map(s => ({
      name: s.title_english,
      image: s.image_url_lge,
      popularity: s.popularity,
    }))
    .shuffle()
    .value();

  const answer = _.chain(choices)
    .orderBy('popularity', 'desc')
    .map(s => ({
      name: s.name,
    }))
    .value();

  return {
    type: 'ranking',
    text: generateText(),
    content: {
      sortBy,
      choices,
    },
    answer,
  };
}

export default generateRankingQuestion;
