export const setFilters = (input: any) => {
  let { name, sort, order, variables, type, generation, size, page } = input;

  if (!name) {
    name = "%";
  }

  if (sort !== "podedexNumber" && sort !== "power") {
    sort = "podedexNumber";
  }

  if (sort === "podedexNumber") {
    sort = "podedex_number";
  }

  if (order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC") {
    order = "ASC";
  }

  if (
    variables !== "crossGen" ||
    variables !== "legendary" ||
    variables !== "aquireable" ||
    variables !== "spawns" ||
    variables !== "regional" ||
    variables !== "raidable" ||
    variables !== "shiny" ||
    variables !== "hatchable" ||
    variables !== "nest" ||
    variables !== "new" ||
    variables !== "notGettable" ||
    variables !== "futureEvolve"
  ) {
    variables = "%";
  }

  if (variables === "notGettable") {
    variables = "not_gettable";
  }

  if (variables === "futureEvolve") {
    variables = "future_evolve";
  }

  if (variables === "crossGen") {
    variables = "cross_gen";
  }

  if (!type) {
    type = "%";
  }

  if (
    generation !== 1 ||
    generation !== 2 ||
    generation !== 3 ||
    generation !== 4 ||
    generation !== 5 ||
    generation !== 6 ||
    generation !== 7
  ) {
    generation = "%";
  }

  if (isNaN(size) || size < 1) {
    size = 10;
  }

  if (isNaN(page) || page < 1) {
    page = 1;
  }

  let offset = size * (page - 1);

  const filters = {
    name,
    sort,
    order,
    variables,
    type,
    generation,
    size,
    offset,
  };

  return filters;
};
