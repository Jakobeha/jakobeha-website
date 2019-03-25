import { FeatureType, IFeature, IFeatureTypeMap } from "../types";

export default class FeatureTypeMap {
  public static group(features: IFeature[]): IFeatureTypeMap<IFeature[]> {
    const map: IFeatureTypeMap<IFeature[]> = {
      language: [],
      paradigm: [],
      library: [],
      ide: []
    };
    features.forEach(feature => {
      map[feature.type].push(feature);
    });
    return map;
  }

  public static map<T, T2>(self: IFeatureTypeMap<T>, f: (value: T, type: FeatureType) => T2): IFeatureTypeMap<T2> {
    return {
      language: f(self.language, FeatureType.Language),
      paradigm: f(self.paradigm, FeatureType.Paradigm),
      library: f(self.library, FeatureType.Library),
      ide: f(self.ide, FeatureType.IDE)
    };
  }

  public static flatten<T>(self: IFeatureTypeMap<T>): T[] {
    return [
      self.language,
      self.paradigm,
      self.library,
      self.ide
    ]
  }
}