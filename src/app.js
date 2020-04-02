'use strict';

function App () {
  const [name, setName] = React.useState('')
  const [position, setPosition] = React.useState('')
  const [phoneNumber, setPhoneNumber] = React.useState('')
  const [email, setEmail] = React.useState('')

  React.useEffect(() => {
    const signature = document.getElementById('signature')
    const html = document.getElementById('html')

    if (!signature || !html) {
      return
    }

    console.log(signature.innerHTML)
    html.innerText = signature.innerHTML
  }, [
    name,
    position,
    phoneNumber,
    email,
  ])

  const onNameChange = React.useCallback((event) => setName(event.target.value))
  const onPositionChange = React.useCallback((event) => setPosition(event.target.value))
  const onPhoneNumberChange = React.useCallback((event) => setPhoneNumber(event.target.value))
  const onEmailChange = React.useCallback((event) => setEmail(event.target.value))

  const mailto = name
    ? `%22${ name.replace(' ', "%20") }%22%3c${ email }%3e`
    : email

  const phoneClean = phoneNumber
    ? phoneNumber.replace(/\s+/g, '')
    : undefined

  return (
    <div className="panels">
      <div className="panel panel-secondary">
        <form className="panel_content">
          <div className="field">
            <label>Meno: </label>
            <input
              name="name"
              placeholder="Zadaj svoje celé meno"
              value={name}
              onChange={onNameChange}
            />
          </div>

          <div className="field">
            <label>Pozícia: </label>
            <input
              name="position"
              placeholder="Zadaj svoju pozíciu, napr. koordinátor"
              value={position}
              onChange={onPositionChange}
            />
          </div>

          <div className="field">
            <label>Tel. číslo: </label>
            <input
              name="phone-number"
              placeholder="Zadaj telefónne číslo"
              value={phoneNumber}
              onChange={onPhoneNumberChange}
            />
          </div>

          <div className="field">
            <label>email: </label>
            <input
              name="email"
              placeholder="Zadaj svoj@email"
              value={email}
              onChange={onEmailChange}
            />
          </div>
        </form>
      </div>
      <div className="panel">
        <p class="hint">
          1. Zadaj svoje údaje do formulára, niektoré môžeš vynechať<br />
          2. Klikni dovnútra čiarkovanej plochy<br />
          3. Vyber všetko (Cmd + A / Ctr + A)<br />
          4. Skopíruj označený obsah (Cmd + C / Ctrl + C)<br />
          5. Vlož skopírovaný obsah do podpisu (<a
            target="_blank"
            href="https://support.office.com/en-us/article/Create-and-add-a-signature-to-messages-8ee5d4f4-68fd-464a-a1c1-0e1c80bb27f2"
          >Outlook</a>, <a
            target="_blank"
            href="https://www.lifewire.com/use-signatures-in-windows-10-mail-4123784"
          >Win 10</a>, <a
            target="_blank"
            href="https://support.apple.com/en-gb/guide/mail/mail11943/mac"
          >Mac</a>)</p>
        <div className="select-here">
          <div id="signature" contentEditable={true} className="panel_content">
            <p>S pozdravom</p>
            <p style={{lineHeight: '1.5em' }}>
              {name}
              {position && <React.Fragment><br /><i style={{ color: '#777777' }}>{position}</i><br /></React.Fragment>}
              <span style={{ fontSize: '0.9em' }}>
                {email && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`mailto:${mailto}`}>{email}</a><br />
                </React.Fragment>}
                {phoneClean && <React.Fragment>
                  <a style={{color: '#777777', textDecoration: 'none' }} href={`tel:${phoneClean}`}>{phoneNumber}</a><br />
                </React.Fragment>}
              </span>
            </p>

            <table border="0" cellPadding="0" cellSpacing="0"><tbody><tr>
              <td><a style={{ verticalAlign: 'bottom' }} href="https://smepripraveni.sk/"><img style={{ verticalAlign: 'middle' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAACXBIWXMAAAsSAAALEgHS3X78AAAARVBMVEVHcExomnFVqmRenmlYrGZ9fn1onHF+fn5YsmhXsWhUqmNOkVpYs2hMnVpQpV9UrGP///9IlFZcvG1Ei1GQypro9OrH4ctx0dbiAAAADHRSTlMAGoIwW4NKevuq17Uj4A5XAAAEoklEQVRo3u2b24KqIBiFRcgDckiamfd/1M2ZX9JKBfdNS0cFjI8FSKZM03z1gdDbiBrCLaV07BI0C9dSNyirFoQZCFfzy9gwDGxgnoQHpYM6rjZ5VBqjpdk4hU1JGK5q2GENy1rMw9V6MTHuPGg0LawGBsNFqbDXkgxUEbzstdeBMTO9dgi99jMwKtiLtdBn4DIDCmbLXvsenA8wR1tYLXvxW7AdYMx6kkwUY7vANA0w6CR4l2PsBrHzA8pex112/mWO8/Mvc0y+jr+Ov46/jj91TK53rNWijrLLHWvpY8XYf3A8xHtdm051elvq5i85CFW7rcGkFwQDT4Nir8AKVkFJxwM4XgNnVV+qjbP9KhqeV9DxLhVs46vBX8dfx9c7lna93LH7MaqKghEZxxa/dKz+7r9G9x9ZDkzsT2s2oheO1e/dqSDYsIzs9+tmG5cHo/QDd7zUcbyHsA96zjje+cM8PeYxjyc7td6pVU2wuY1q2X9wbG85tq7iD8Bkb6de3kceBbO94Iaq7dFZRkWwiFG5470P9/D2+Kt+ojz3/peicu9dsfFZqvsLPYH3P7FPPwfs149koSZjy34EPvBkj0KyTC37CViyE48U7bBpkZ7s2IK9BAsGPjEweuihrSY5nD3wEvINOJ5vHB8C62Z27QqwJvgO7ND2I0dvQEZNHuRSgr3s1WJxMjv48BZRlmP1319UwP3GGA0OH9H7gZGDd1tYPktwrXmeORdx5Jq5l8hOPvzirWVyxbPZCJFaG1SwWBzQ4w/obWULv/p90NpY7U9zB+zEzS2OWQm4GPEE5jFZwBMPN7GrbE9y2bpN7pjDIoWC6f2pd6vUZZYqOBwsHC+TXekGeobbYPEMlbnjrExOw8n3XbqyV8WfwLnOvsWe5Hq+b8Dy9JtVfMyxJGfBTWstc73Yjd0ZqR+32GCWzAUt8CJXV3bMN+VvRk4zeM4uAJP1KktMF0DCZOxXvxHepzNrgjY9nVZkJgyRKVv/dZCFfZEiVxaaHzGJgINMETmpOEGFpv4gmCdf4eQpxSaEdNuQVZWb69QuyfNLrCg5A4YKi7PrDNkgcvaxtCC3wXzBm4HrOSXZVZCSYFPZzpYdN7hf3FE8sCWYmrKaBA/IQOWpECCt9OQq5AbIuJmj+SB7JEob1tcUB5CFYGl4hWmDLQecDXHSVND0Cum4Uw1ug3z2j21ypfmZhBvqI/IffhuWOhUNKvsR8LAUuqIrTpCkyV/Y2T9bAlqP2+B5STW8uKk6L5NYf8En3M6kqarJO334ig7Hla6kJXlNtPpMZ7zKfeCmuroVbO0GduqfK7ttLtFTM0/NRZr+E7dB9NoOvdG18RVWEcK46/rulrg3Hew6jFA1Zkf6/ubVj7GBU1xPutJ41PUu66QpclOcPaUrxzZUn7NfInlysX4N8DL/rYEcNmXde/bkuYkcynTrS7jub1nWPqzJUywEKJNbS4H7kPktsGAsLJOPL1bVAHjrEwu0L2zmvkwHw/0t9S5QoatYcyoufTktrqd+Ger9RV7ycnJsM2KlEcQgbjBkimEGsGrjl+abIYwEm6QnxA2ZF35XfLVH/wBAkxbZqJovqAAAAABJRU5ErkJggg==" height="40" width="40" /></a></td>
              <td style={{ paddingRight: 20 }}><a style={{ textDecoration: 'none' }} href="https://smepripraveni.sk/"><span style={{ color: '#58B368', fontSize: '1.2em' }}>sme<b>pripraveni.sk</b></span></a></td>
            </tr></tbody></table>
          </div>
        </div>
        <hr />
        <p class="hint">PS: Podpisy pre Gmail cez web majú bug a nefungujú, skúste prosím používať Gmail s inou appkou, kde je možné podpis zadať priamo nižšie uvedené HTML ako napr.:</p>
        <ul class="hint">
          <li>
            <a
              target="_blank"
              href="https://sparkmailapp.com/"
            >Spark pre iOS, Android, Mac</a>; návod na <a
              target="_blank"
              href="https://sparkmailapp.com/how-to-add-signature-ios"
            >nastavenie podpisu</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.thunderbird.net/"
            >Thunderbird pre Mac, Win a Linux</a>; návod na <a
              target="_blank"
              href="https://support.mozilla.org/en-US/kb/signatures#w_html-signatures"
            >nastavenie podpisu</a>
          </li>
        </ul>
        <textarea id="html" class="select-here"></textarea>
      </div>
    </div>
  )
}

const domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App), domContainer);