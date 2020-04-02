'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function App() {
  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      name = _React$useState2[0],
      setName = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      position = _React$useState4[0],
      setPosition = _React$useState4[1];

  var _React$useState5 = React.useState(''),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      phoneNumber = _React$useState6[0],
      setPhoneNumber = _React$useState6[1];

  var _React$useState7 = React.useState(''),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      email = _React$useState8[0],
      setEmail = _React$useState8[1];

  var onNameChange = React.useCallback(function (event) {
    return setName(event.target.value);
  });
  var onPositionChange = React.useCallback(function (event) {
    return setPosition(event.target.value);
  });
  var onPhoneNumberChange = React.useCallback(function (event) {
    return setPhoneNumber(event.target.value);
  });
  var onEmailChange = React.useCallback(function (event) {
    return setEmail(event.target.value);
  });

  var mailto = name ? '%22' + name.replace(' ', "%20") + '%22%3c' + email + '%3e' : email;

  var phoneClean = phoneNumber ? phoneNumber.replace(/\s+/g, '') : undefined;

  return React.createElement(
    'div',
    { className: 'panels' },
    React.createElement(
      'div',
      { className: 'panel panel-secondary' },
      React.createElement(
        'form',
        { className: 'panel_content' },
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Meno: '
          ),
          React.createElement('input', {
            name: 'name',
            placeholder: 'Zadaj svoje cel\xE9 meno',
            value: name,
            onChange: onNameChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Poz\xEDcia: '
          ),
          React.createElement('input', {
            name: 'position',
            placeholder: 'Zadaj svoju poz\xEDciu, napr. koordin\xE1tor',
            value: position,
            onChange: onPositionChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'Tel. \u010D\xEDslo: '
          ),
          React.createElement('input', {
            name: 'phone-number',
            placeholder: 'Zadaj telef\xF3nne \u010D\xEDslo',
            value: phoneNumber,
            onChange: onPhoneNumberChange
          })
        ),
        React.createElement(
          'div',
          { className: 'field' },
          React.createElement(
            'label',
            null,
            'email: '
          ),
          React.createElement('input', {
            name: 'email',
            placeholder: 'Zadaj svoj@email',
            value: email,
            onChange: onEmailChange
          })
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'panel' },
      React.createElement(
        'p',
        { 'class': 'hint' },
        '1. Zadaj svoje \xFAdaje do formul\xE1ra, niektor\xE9 m\xF4\u017Ee\u0161 vynecha\u0165',
        React.createElement('br', null),
        '2. Klikni dovn\xFAtra \u010Diarkovanej plochy',
        React.createElement('br', null),
        '3. Vyber v\u0161etko (Cmd + A / Ctr + A)',
        React.createElement('br', null),
        '4. Skop\xEDruj ozna\u010Den\xFD obsah (Cmd + C / Ctrl + C)',
        React.createElement('br', null),
        '5. Vlo\u017E skop\xEDrovan\xFD obsah do podpisu (',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://support.office.com/en-us/article/Create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2'
          },
          'Outlook'
        ),
        ', ',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://www.lifewire.com/use-signatures-in-windows-10-mail-4123784'
          },
          'Win 10'
        ),
        ', ',
        React.createElement(
          'a',
          {
            target: '_blank',
            href: 'https://support.apple.com/en-gb/guide/mail/mail11943/mac'
          },
          'Mac'
        ),
        ')'
      ),
      React.createElement(
        'div',
        { className: 'select-here' },
        React.createElement(
          'div',
          { contentEditable: true, className: 'panel_content' },
          React.createElement(
            'p',
            null,
            'S pozdravom'
          ),
          React.createElement(
            'p',
            { style: { lineHeight: '1.5em' } },
            name,
            position && React.createElement(
              React.Fragment,
              null,
              React.createElement('br', null),
              React.createElement(
                'i',
                { style: { color: '#777777' } },
                position
              ),
              React.createElement('br', null)
            ),
            React.createElement(
              'span',
              { style: { fontSize: '0.9em' } },
              email && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'a',
                  { style: { color: '#777777', textDecoration: 'none' }, href: 'mailto:' + mailto },
                  email
                ),
                React.createElement('br', null)
              ),
              phoneClean && React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  'a',
                  { style: { color: '#777777', textDecoration: 'none' }, href: 'tel:' + phoneClean },
                  phoneNumber
                ),
                React.createElement('br', null)
              )
            )
          ),
          React.createElement(
            'table',
            { border: '0', cellPadding: '0', cellSpacing: '0' },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  React.createElement(
                    'a',
                    { style: { verticalAlign: 'bottom' }, href: 'https://smepripraveni.sk/' },
                    React.createElement('img', { style: { verticalAlign: 'middle' }, src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAACXBIWXMAAAsSAAALEgHS3X78AAAARVBMVEVHcExomnFVqmRenmlYrGZ9fn1onHF+fn5YsmhXsWhUqmNOkVpYs2hMnVpQpV9UrGP///9IlFZcvG1Ei1GQypro9OrH4ctx0dbiAAAADHRSTlMAGoIwW4NKevuq17Uj4A5XAAAEoklEQVRo3u2b24KqIBiFRcgDckiamfd/1M2ZX9JKBfdNS0cFjI8FSKZM03z1gdDbiBrCLaV07BI0C9dSNyirFoQZCFfzy9gwDGxgnoQHpYM6rjZ5VBqjpdk4hU1JGK5q2GENy1rMw9V6MTHuPGg0LawGBsNFqbDXkgxUEbzstdeBMTO9dgi99jMwKtiLtdBn4DIDCmbLXvsenA8wR1tYLXvxW7AdYMx6kkwUY7vANA0w6CR4l2PsBrHzA8pex112/mWO8/Mvc0y+jr+Ov46/jj91TK53rNWijrLLHWvpY8XYf3A8xHtdm051elvq5i85CFW7rcGkFwQDT4Nir8AKVkFJxwM4XgNnVV+qjbP9KhqeV9DxLhVs46vBX8dfx9c7lna93LH7MaqKghEZxxa/dKz+7r9G9x9ZDkzsT2s2oheO1e/dqSDYsIzs9+tmG5cHo/QDd7zUcbyHsA96zjje+cM8PeYxjyc7td6pVU2wuY1q2X9wbG85tq7iD8Bkb6de3kceBbO94Iaq7dFZRkWwiFG5470P9/D2+Kt+ojz3/peicu9dsfFZqvsLPYH3P7FPPwfs149koSZjy34EPvBkj0KyTC37CViyE48U7bBpkZ7s2IK9BAsGPjEweuihrSY5nD3wEvINOJ5vHB8C62Z27QqwJvgO7ND2I0dvQEZNHuRSgr3s1WJxMjv48BZRlmP1319UwP3GGA0OH9H7gZGDd1tYPktwrXmeORdx5Jq5l8hOPvzirWVyxbPZCJFaG1SwWBzQ4w/obWULv/p90NpY7U9zB+zEzS2OWQm4GPEE5jFZwBMPN7GrbE9y2bpN7pjDIoWC6f2pd6vUZZYqOBwsHC+TXekGeobbYPEMlbnjrExOw8n3XbqyV8WfwLnOvsWe5Hq+b8Dy9JtVfMyxJGfBTWstc73Yjd0ZqR+32GCWzAUt8CJXV3bMN+VvRk4zeM4uAJP1KktMF0DCZOxXvxHepzNrgjY9nVZkJgyRKVv/dZCFfZEiVxaaHzGJgINMETmpOEGFpv4gmCdf4eQpxSaEdNuQVZWb69QuyfNLrCg5A4YKi7PrDNkgcvaxtCC3wXzBm4HrOSXZVZCSYFPZzpYdN7hf3FE8sCWYmrKaBA/IQOWpECCt9OQq5AbIuJmj+SB7JEob1tcUB5CFYGl4hWmDLQecDXHSVND0Cum4Uw1ug3z2j21ypfmZhBvqI/IffhuWOhUNKvsR8LAUuqIrTpCkyV/Y2T9bAlqP2+B5STW8uKk6L5NYf8En3M6kqarJO334ig7Hla6kJXlNtPpMZ7zKfeCmuroVbO0GduqfK7ttLtFTM0/NRZr+E7dB9NoOvdG18RVWEcK46/rulrg3Hew6jFA1Zkf6/ubVj7GBU1xPutJ41PUu66QpclOcPaUrxzZUn7NfInlysX4N8DL/rYEcNmXde/bkuYkcynTrS7jub1nWPqzJUywEKJNbS4H7kPktsGAsLJOPL1bVAHjrEwu0L2zmvkwHw/0t9S5QoatYcyoufTktrqd+Ger9RV7ycnJsM2KlEcQgbjBkimEGsGrjl+abIYwEm6QnxA2ZF35XfLVH/wBAkxbZqJovqAAAAABJRU5ErkJggg==', height: '40', width: '40' })
                  )
                ),
                React.createElement(
                  'td',
                  { style: { paddingRight: 20 } },
                  React.createElement(
                    'a',
                    { style: { textDecoration: 'none' }, href: 'https://smepripraveni.sk/' },
                    React.createElement(
                      'span',
                      { style: { color: '#58B368', fontSize: '1.2em' } },
                      'sme',
                      React.createElement(
                        'b',
                        null,
                        'pripraveni.sk'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);