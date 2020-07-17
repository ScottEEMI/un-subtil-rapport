# Dorcel Disclaimer Configuration

### 1. Change header opacity:

> index.html / line 39
```html
<div class="header" style="background-color: rgba(0,0,0, 1)">
``` 

Value must be defined between 0 and 1 in "rgba()"

### 2. Background parameters:

This parameters must be dynamic to be choose by Dorcel Team.

Key | Value | Description
--- | --- | ---
background-image | url | Direct url to the background image (mobile or desktop)
background-size | contain / cover | Sizing for screen image:<br> - "cover" to fit width and height of the screen.<br> - "contain" fit width or height based on image aspect ratio 
background-position-x | left / center / right | Image position on the x-axis
background-position-y | (60px/top) / center / bottom | Image position on the y-axis<br>"top" value is only for mobile, is replaced by "60px" on desktop.


### 3. Background Desktop:

> index.html / line 13
```css
#disclaimer-responsive.disclaimer-default {
    background-image: url('URL_TO_DESKTOP_BACKGROUND_IMG');
    background-size: contain | cover ;
    background-position-x: left | center | right ;
    background-position-y: 60px | center | bottom ;
}
```

### 4. Background Mobile:

> index.html / line 20
```css
@media only screen and (max-width: 768px) {
    #disclaimer-responsive.disclaimer-default {
        background-image: url('URL_TO_MOBILE_BACKGROUND_IMG');
        background-size: contain | cover ;
        background-position-x: left | center | right ;
        background-position-y: top | center | bottom ;
    }
}
```

### 5. SSO integration:

> index.html / line 42

The top right account icon must trigger the sso login iframe.
We've included the demo Javascript at the bottom of index.html (line 216)

"<YOUR_SITE>" must be replaced with you SSO public identifier.

### 6. Language alternatives:

> index.html / line 156

All your differents displayed languages must be defined in this section.
"active" class must be used to select current displayed language.

Example with french, english and german languages :

```
<a href="<URL TO FR VERSION>" class="item active">FR</a>
<span>|</span>
<a href="<URL TO EN VERSION>" class="item">EN</a>
<span>|</span>
<a href="<URL TO DE VERSION>" class="item">DE</a>
```
