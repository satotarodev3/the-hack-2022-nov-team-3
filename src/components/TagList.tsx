/** @jsxImportSource @emotion/react */
'use client'

import { useMemo } from 'react'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

// theme
import theme from '~/theme'

// types
import { CategoryJson } from '~/types'

type Props = {
  skill: CategoryJson
  hobby: CategoryJson
  prefectures: CategoryJson
}

type TagArr = { label: string; link: string }[]

const TagList: React.FC<Props> = ({ skill, hobby, prefectures }) => {
  const data: { label: string; link: string }[] = useMemo(() => {
    const d = [
      { list: skill, link: '/?skill=' },
      { list: hobby, link: '/?hobby=' },
      { list: prefectures, link: '/?prefectures=' },
    ]
    return d.reduce((prev, current) => {
      return prev.concat(
        Object.entries(current.list).map((v) => {
          return {
            label: v[1],
            link: current.link + v[0],
          }
        }),
      )
    }, [] as TagArr)
  }, [skill, hobby, prefectures])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ul
        css={css`
          list-style-type: none;
          margin: 0 0 65px;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
        `}
      >
        {data.map((v, i) => {
          return (
            <li
              key={v.link + String(i)}
              css={css`
                display: block;
                margin: 0 5px 10px;
              `}
            >
              <Button variant="outlined" href={v.link}>
                {v.label}
              </Button>
            </li>
          )
        })}
      </ul>
    </ThemeProvider>
  )
}

export default TagList
