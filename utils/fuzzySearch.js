import Fuse from "fuse.js";

export function fuzzySearch(data, query, threshold, keys) {
    const fuseOptions = {
      threshold: threshold,
      keys: keys,
    };

    const fuse = new Fuse(data, fuseOptions);

    if (query.length > 0) {
      const fuzzy = fuse.search(query);
      const fuzzyResults = fuzzy.map((object) => object.item);

      return fuzzyResults;
    } else {
      return [];
    }
  }