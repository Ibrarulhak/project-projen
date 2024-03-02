# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BucketPattern <a name="BucketPattern" id="@sample/patterns.BucketPattern"></a>

#### Initializers <a name="Initializers" id="@sample/patterns.BucketPattern.Initializer"></a>

```typescript
import { BucketPattern } from '@sample/patterns'

new BucketPattern(scope: Construct, id: string, props: BucketPatternProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@sample/patterns.BucketPattern.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@sample/patterns.BucketPattern.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@sample/patterns.BucketPattern.Initializer.parameter.props">props</a></code> | <code><a href="#@sample/patterns.BucketPatternProps">BucketPatternProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@sample/patterns.BucketPattern.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@sample/patterns.BucketPattern.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@sample/patterns.BucketPattern.Initializer.parameter.props"></a>

- *Type:* <a href="#@sample/patterns.BucketPatternProps">BucketPatternProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@sample/patterns.BucketPattern.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@sample/patterns.BucketPattern.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@sample/patterns.BucketPattern.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@sample/patterns.BucketPattern.isConstruct"></a>

```typescript
import { BucketPattern } from '@sample/patterns'

BucketPattern.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@sample/patterns.BucketPattern.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@sample/patterns.BucketPattern.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@sample/patterns.BucketPattern.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### BucketPatternProps <a name="BucketPatternProps" id="@sample/patterns.BucketPatternProps"></a>

#### Initializer <a name="Initializer" id="@sample/patterns.BucketPatternProps.Initializer"></a>

```typescript
import { BucketPatternProps } from '@sample/patterns'

const bucketPatternProps: BucketPatternProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@sample/patterns.BucketPatternProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Optional</sup> <a name="name" id="@sample/patterns.BucketPatternProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---



