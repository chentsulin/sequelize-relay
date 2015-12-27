## resolveArrayData ⇒ `Promise<Array<Attributes>>`
**resolveArrayData(promisedInstances, withMethods) ⇒ `Promise<Array<Attributes>>`**

Converts a **promised** `Array` of <SequelizeModel> instances into a **promised**
`Array` of <Attributes> objects.


**Returns**: `Promise<Array<SequelizeModel>>`


<table>
<thead><th><td>Param</td><td>Type</td><td>Description</td></th></thead>
<tbody>
<tr><td>promisedInstances</td><td>Promise<Array></td><td>A promise that will become an array of <SequelizeModel> instances</td></tr>
<tr><td>withMethods</td><td>Boolean `default: false`</td><td>If true, the <Attributes> objects wil also contain the get/set methods from the <SequelizeModel></td></tr>
</tbody>
</table>

----