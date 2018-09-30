# ecom-assets
## A collection of React UI assets intended to be used to start a new Ecommerce project quickly.

## The philosophy behind this project is not to offer a full Ecommerce solution, but rather to provide the basic elements of an Ecommerce system as React components so they can be integrated and customized quickly.

## Code Standards:

### These assets are intended to play nicely with React, so object properties that are not part of React should be capitalized in order to differentiate them. For example: 

```
this.items;
```

### would be distinct from the Ecommerce property

```
this.Items;
```

### Similarly, classes and IDs on the various rendered components should be camel-cased and prefixed with
``` ecoma ```
### to signify that they are classes targeted by the .scss shipped with the components.
