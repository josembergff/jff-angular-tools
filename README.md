# JffAngularTools

A Open Source Angular components and tools for any project based in Angular.

## How to use

### Installation

```bash
npm i jff-angular-tools --save
```

### Apply in your module

```typescript
import { JffAngularToolsModule } from 'jff-angular-tools'

@NgModule({
    imports: [
        JffAngularToolsModule
    ],
})
```

## Pipe Currency

### In your component.html

```html
    <div>
        {{ object.cost | jffcurrency }}
    </div>
```
or without symbol

```html
    <div>
        {{ object.cost | jffcurrency : false }}
    </div>
```

### Options Pipe Currency

| option                | default
| --------------        | --------------
| displaySymbol         | true          
| locale                | 'pt-br'       
| currency              | 'BRL'         
| minimumFractionDigits | 0             