/* @flow */

type SequelizeClass = {
  findAll: Function
}

type Attributes = Object;
type SequelizeModel = {
  type: String,
  dataValues: Attributes
}

/**
 * Converts an array of <SequelizeModel> instances to an array of <Attributes>
 * objects.
 * @param instances
 * @param withMethods {Boolean} false by default.
 * @returns {Array.<Attributes>}
 */
export function getArrayData(
  instances: Array<SequelizeModel>,
  withMethods: boolean = false
): Array<Attributes> {

  if (withMethods) {
    return [].concat(...instances);
  } else {
    return [].concat(instances.map(model => {
      return Object.assign({}, {
        type: model.type
      }, {
        ...model.dataValues
      });
    }));
  }
}


/**
 * Returns an `Array` of
 * <SequelizeModel> instances that are of the passed-in `Class`.
 * @param SeqClass
 * @returns {Array.<SequelizeModel>}
 */
export function getModelsByClass(
  SeqClass: SequelizeClass
): Array<SequelizeModel> {
  return SeqClass.findAll();
}



/**
 * First, it internally resolves an an `Array` of
 * <SequelizeModel> instances that are of the passed-in `Class`.
 * Then it converts the array into a **promised** `Array` of <Attributes>
 * objects.
 * @param SeqClass
 * @param withMethods {Boolean} false by default.
 * @returns {Array.<Attributes>}
 */
export async function resolveArrayByClass(
  SeqClass: SequelizeClass,
  withMethods: boolean = false
): Promise<Array<Attributes>> {

  let models = await resolveModelsByClass(SeqClass);
  return getArrayData(models, withMethods);

}



/**
 * Converts a promised  `Array` of <SequelizeModel> instances into a
 * **promised** `Array` of <Attributes> objects.
 * @param instances
 * @param withMethods {Boolean} false by default.
 * @returns {Promise<Array<Attributes>>}
 */
export function resolveArrayData(
  instances: Promise<Array<SequelizeModel>>,
  withMethods: boolean = false
): Promise<Array<Attributes>> {
  return new Promise((resolve, reject) => {
    instances.then((models) => {
      resolve(getArrayData(models, withMethods));
    }).catch(reject);
  });
}


/**
 * Returns a **promised** `Array` of <Attributes> objects by `Class`.
 *
 * @param SeqClass
 * @returns {Promise<Array<SequelizeModel>>}
 */
export async function resolveModelsByClass(
  SeqClass: SequelizeClass
): Promise<Array<SequelizeModel>> {
  return await SeqClass.findAll();
}
