import { QueryInputDTO, FiltersInputDTO } from "../model/DTO";

export const setFilters = (input: QueryInputDTO):FiltersInputDTO => {
  let { name, sort, order, variables, type, generation, size, page } = input;

  if (!name) {
    name = "%";
  }

  if (sort !== "podedexNumber" && sort !== "power" && sort !== "name") {
    sort = "podedexNumber";
  }

  if(sort === "power"){
    sort = "stat_total"
  }

  if (sort === "podedexNumber") {
    sort = "pokedex_number";
  }

  order = order?.toUpperCase();
  if (order !== "ASC" && order !== "DESC") {
    order = "ASC";
  }

  if (variables === "crossGen") {
    variables = "cross_gen";
  }

  if (variables === "notGettable") {
    variables = "not_gettable";
  }

  if (variables === "futureEvolve") {
    variables = "future_evolve";
  }

  if (
    variables !== "cross_gen" &&
    variables !== "legendary" &&
    variables !== "aquireable" &&
    variables !== "spawns" &&
    variables !== "regional" &&
    variables !== "raidable" &&
    variables !== "shiny" &&
    variables !== "nest" &&
    variables !== "new" &&
    variables !== "not_gettable" &&
    variables !== "future_evolve"
  ) {
    variables = undefined;
  }

  if (!type) {
    type = "%";
  }

  if (
    generation !== 1 &&
    generation !== 2 &&
    generation !== 3 &&
    generation !== 4 &&
    generation !== 5 &&
    generation !== 6 &&
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
