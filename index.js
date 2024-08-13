(async () => {
// 在打开新增提现地址的弹窗之后，将以下代码粘贴到浏览器的控制台中并按回车执行。
// 请按照一行一个的格式输入你想要添加的地址，每次操作最多支持添加20个地址。
  const sleep = (delay = 1000) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }

  let addrs = `
UQCjntxvsytAe2NmsyF4VR7JXDqYMXQYZ67NSBzZ7bNt9lDL
UQAEZJdXaL_MfjQhvcfBPy-NiZfRx4B-6SJZaV6CCU3ZSk3x
UQAbasbzsrvWx2kDyo9OwJaeVTnnOZtTN9ZNKPVIYf5008zs
UQAD4GlfDJNMtXfgtKGf5iAG5WfvfOiUz-LsTGJ56etdQg7z
UQAeXbH3ZsSiFn1ip4TXOvfIdl2GhHu8UYMvXf1FgWHKM9lL
UQBDgPzLekjZ9XnS7Y5g2qdrONENCjPPSsv9JkGJSMfDF6Vc
UQDESUbp93zdFaQ3lhKbjRFTrNdRmsWju4oT2p62s-a1SGpL
UQCLG4anyFlHbRk-HkCSFc-UCR6SsGTGh6BHklIJ01_rxbwY
UQB1qb8zOao_U4e-aZxVV69vVJwR7hyiSIUsErzB5Nrrv440
UQAMzdem_ZuJdZDj6zDcIAoy2qSFHmH--Z38X7p-aiDvMHPM
UQCs1Z0Gk2A2DE5y8t--ajdQB_Xd_o-hoeQFoZUqE1F2X-lU
UQCTSrsh4FnH7sG7CeHtMwsO8Rtb4Ccd4fbFzUfz02FxOQ60
UQB3Qn7yiydpNgFdhNEEiL191_aI06kJdNsV-Rgxb75FvwyV
UQBZ8rIl9RQWGp0NR2VeodWlYQCe22lupbRmZzqJnShfQl_o
UQAOHSI203NvsBPIbNSc9Q2_uzv1abmGumJUB7Yhq4-fUoDE
UQCj9KDGLxNR8lnrxgFYEqZHxH8vu-Inz4A1yEyow2tMbV_P
UQBx3ygzIeOqTR9XiaqTgp8_IU24LchxMPcfln-XnjPT4Lum
UQBx_uy21rbd1L4gkx2myO6ZE3yJQt0UH8UoGDcibCOzSLHm
UQCtrDLxqK7PEki-QI-4lf7VTf8MeHKWS-zNIatCBbO2myig
UQB-aQphtrHAe_o5jyr66kGriFZz-kUAeHXJln8lOQre2jHe
UQDCtzC1cXg9TXgUkvppIsMCe9nS-mcxmfWECJbvEDBYVFOQ
UQDGJvigYFzvbJnFiFggltN3BzIOeKp2R47JirriUeqVGpr1
UQAwnKjtcHGKSniSo1Tzu1LbWQyb4CyH9RfwzaMknwYtwkZj
UQAmT4gf3bd4gHI3LhuH4m8-tw3iNrnyjTK2smQ4eYGkQIfa
UQA2CqW2G4w5oBsfS9djhcLPhpiDcaC__hJlBhwDmQNB7Kw0
UQCEL10_tqqDIrcl0upBts_Gl3a1DrfUWHK5JYHKGgXk4MWF
UQCc_A1DUX1esFy1EEldMBswRPkVVnF1NIzWkEEZw2zeFXQl
UQAg_FnYhGdD_ip7sDhhf0nQbNmFdmDg--9dkaxHJIEgJ2AL
UQBtzZalOUhPNHeSB9qYTJoBdUO-bkig4Go1IQlsqB1w31VT
UQDFSh_jg_gvdPXcBWptXOUb0Q8RbYwJ3XWIE1PnqFHF2qmR
UQAa37BixE2A3W4wmTYZJ62OAL_lzfibISpf2wmMvEWSy_Wi
UQDGp1TSR-qDB0NY90d_926Dk_gDPTETrRZhyMtO3YuintyP
UQAbpAbhGHl_VG7jTnAwjK8dPNC2cB_XmLSxnoZBXDVbRAzs
UQB1v8-vQ8uUCZsjpOE0YQTlBnc2TLUIWmKP854YgSjGek-n
UQCAbpYpj2Cg0rJ1idkOqlyV3HEb0QbgaUWaT7CfQIw3dTff
UQAT41NmZumOaLhffaJ6umkB-MrlgDWSPOoWYhFcDuWGK5EF
UQD6wsjnC7V4mPX10kSI9s2SCsV9NUICfIyFFL6kwGezX5LF
UQDjGukUw57LdwNVE6dF0kOHa52pIG7H3CyblJXTVHcK7410
UQBfBL58X-mw3ObMJRb9dTLazRynjq9KZgG1IfUoi9LwYOg0
UQDvQaNRoLY5mharWLUlCWRXFd4b47TDeCYJwoVIGLKlKIRW
UQBO43Ngex-3QfP8-a-E2vXqNOOE5TvF51zEvZQbNp6zZ9b_
UQCIeaIgB_I55yq6BUud4YH9IG6i3-nMoqoh7mC-IEDTVT3S
UQCMxIqkEtP1UPbiArTwROW6QZWkjDjF5f63acrcFNbqJHl0
UQCdvj414MP5WFzW3Qa-HrhJelvcGLV9tLKl0yIv9CdpJBIM
UQB0MRr5LsroIy3P140H6Hlx7LsU1Ltwj-YDzqVG8p9ifreE
UQB0a4W_MGFLpZkNlq-zP2IXt0C8Fd52UaMLzAg_8akYSXoP
UQDCWws2ciFgcMq8t4_idKCIOiu6PC9SGpou6Elh1b7GT-j0
UQA2wARrvrIfL256LouizlXonK_EvggqS9pt7u80NEmpkTNX
UQBB5HaBhMTUri8SVDO0tHWCAi4p9Lq-c6MYc2amodiccDyh
UQCANmuef4GDm6w6UYAadbpYKZAwuhvjAyw5woXgwk3ko8rE
`
  addrs = addrs.split('\n').map(el => el.trim()).filter(Boolean);
  const nodes = document.querySelectorAll('.balance_okui-table-tbody .addressInputItem .balance_okui-input-input');

  const addBtnCoinTool = document.querySelector('.btn-outline-secondary');
  const placeholderValue = nodes[0].placeholder;

  for (let i = 0; i < addrs.length - 1; i++) {
    await sleep(500)
    addBtnCoinTool.click()
  }

  setTimeout(() => {
    const inputs = document.querySelectorAll(`input[placeholder="${placeholderValue}"]`);
    console.log(inputs, 'inputs');

    addrs.forEach((el, i) => {
      const input = inputs[i];
      console.log(input, 'input');
      const latestValue = input.value;
      input.value = el;

      const event = new Event('input', { bubbles: true })
      event.simulated = true;
      const tracker = input._valueTracker;

      if (tracker) {
        tracker.setValue(latestValue)
      }
      input.dispatchEvent(event)
    })
  }, 1000)
})();
