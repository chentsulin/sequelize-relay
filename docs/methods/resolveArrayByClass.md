## resolveArrayByClass ⇒ `Promise<Array<Attributes>>`
**resolveArrayByClass(<SequelizeClass>, withMethods) ⇒ `Promise<Array<Attributes>>`**

First, it internally resolves an an `Array` of <SequelizeModel> instances
that are of the passed-in `Class`. Then it converts the array into a
**promised** `Array` of <Attributes> objects.


**Returns**: `Promise<Array<Attributes>>`


<table>
<thead><th><td>Param</td><td>Type</td><td>Description</td></th></thead>
<tbody>
<tr><td>SequelizeClass</td><td>Class</td><td>A specific SequelizeClass to process.</td></tr>
<tr><td>withMethods</td><td>Boolean `default: false`</td><td>If true, the <Attributes> objects wil also contain the get/set methods from the <SequelizeModel></td></tr>
</tbody>
</table>

----