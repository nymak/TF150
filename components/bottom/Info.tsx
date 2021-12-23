import { NextPage } from 'next'
import Row from '../Row'
import Column from '../Column'
import LanguageOptions from '../languageOptions'
import Fundraising from './Fundraising'
import NationsLogoRow from './Logos'

interface Props {
  isMobile: boolean | undefined
  language: string
  setLanguage: (language: string) => void
}

/*  
 TODO: 
  - add nationsföretag logos
  - add info about fundraising
*/
const Info: NextPage<Props> = ({ isMobile, language, setLanguage }) => {
  return (
    <>
      <div className={'info-parent'}>
        <Column className={'cont'}>
          <Fundraising language={language} isMobile={isMobile} />
          {!isMobile && (
            <>
              <LanguageOptions language={language} setLanguage={setLanguage} />
            </>
          )}
          <Row className={'info-text'}>
            <div>TEKNOLOGFÖRENINGENS NATIONSFÖRETAG</div>
          </Row>
        </Column>
      </div>
      <NationsLogoRow />
    </>
  )
}

export default Info
