<div align="center">

[![Words as a Service](https://words-aas.now.sh/assets/title.png)](https://words-aas.now.sh)

[![Hosted on Zeit Now](https://badgen.net/badge/%E2%96%B2%20Hosted%20on/Zeit%20Now/black)](https://now.sh)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Known Vulnerabilities](https://snyk.io/test/github/chroline/words-aas/badge.svg)](https://snyk.io/test/github/chroline/words-aas)
[![dependencies Status](https://david-dm.org/chroline/words-aas/status.svg)](https://david-dm.org/chroline/words-aas)
[![devDependencies Status](https://david-dm.org/chroline/words-aas/dev-status.svg)](https://david-dm.org/chroline/words-aas?type=dev)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/chroline/words-aas/issues)
[![Maintainability](https://api.codeclimate.com/v1/badges/913d463015f91a452b70/maintainability)](https://codeclimate.com/github/chroline/words-aas/maintainability)

</div>

---

> A simple API to generate unique randomized words & phrases.

## Usage

words-aas supports 8 word types that can be used to form a phrase:

- `adjective`
- `adverb`
- `animal`
- `body-parts`
- `gerunds`
- `plural-nouns`
- `verbs` (imperative mood)

Additionally, you can also use `the` and `a` to form a phrase. When placed at the beginning of a phrase, `a` will be transformed into `an` if the second word in the phrase begins with a vowel.

To form a phrase, connect the type(s) of words you want with a comma. For example, to form a phrase consisting of a verb, `the`, and a plural noun, you would use the following:
`verb,the,plural-noun`

## API

Make a GET request to [https://words-aas.now.sh/api/PHRASE](https://words-aas.now.sh/api/), where PHRASE is the type of phrase desired.

```shell script
curl --request GET \
  --url 'http://words-aas.now.sh/api/verb,the,plural-noun'
```

or, POST to [https://words-aas.now.sh/api/](https://words-aas.now.sh/api/) with a query of the type of phrase desired.

```shell script
curl --request POST \
    --url https://words-aas.now.sh/api/ \
    --header 'content-type: application/json' \
    --data '{
  	  "query": "verb,the,plural-noun"
    }'

# or

curl --request POST \
    --url https://words-aas.now.sh/api/ \
    --header 'content-type: application/json' \
    --data '{
  	  "query": ["verb","the","plural-noun"]
    }'
```
