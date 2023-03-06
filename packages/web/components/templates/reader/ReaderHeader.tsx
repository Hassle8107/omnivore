import { HStack, SpanBox, VStack } from '../../elements/LayoutPrimitives'
import { Button } from '../../elements/Button'
import { DotsThreeOutline, TextAa } from 'phosphor-react'
import { PrimaryDropdown } from '../PrimaryDropdown'
import { TooltipWrapped } from '../../elements/Tooltip'
import { LogoBox } from '../../elements/LogoBox'
import { ReactNode } from 'react'
import { LIBRARY_HEADER_MOBILE_HEIGHT } from '../homeFeed/LibraryHeader'
import { theme } from '../../tokens/stitches.config'

const HEADER_HEIGHT = '105px'

type ReaderHeaderProps = {
  showDisplaySettingsModal: (show: boolean) => void
  children?: ReactNode
}

export function ReaderHeader(props: ReaderHeaderProps): JSX.Element {
  return (
    <>
      <VStack
        alignment="center"
        distribution="start"
        css={{
          top: '0',
          left: '0',
          zIndex: 1,
          position: 'fixed',
          width: '100%',
          height: HEADER_HEIGHT,
          bg: 'transparent',
          pt: '35px',
          borderBottom: '1px solid transparent',
          '@xlgDown': {
            height: LIBRARY_HEADER_MOBILE_HEIGHT,
            pt: '0px',
            bg: '$thBackground3',
            borderBottom: '1px solid $thBorderColor',
          },
        }}
      >
        <HStack
          alignment="center"
          distribution="start"
          css={{
            width: '100%',
            height: '100%',
          }}
        >
          <LogoBox />
          <SpanBox
            css={{
              width: '100%',
              px: '25px',
              '@lg': { display: 'none' },
              '@mdDown': { px: '15px' },
            }}
          >
            {props.children}
          </SpanBox>
          <SpanBox
            css={{
              width: '100%',
              '@lgDown': {
                display: 'none',
              },
            }}
          >
            <ControlButtonBox {...props} />
          </SpanBox>
        </HStack>
      </VStack>
    </>
  )
}

function ControlButtonBox(props: ReaderHeaderProps): JSX.Element {
  return (
    <>
      <HStack
        alignment="center"
        distribution="end"
        css={{
          marginLeft: 'auto',
          marginRight: '25px',
          width: '100px',
          height: '100%',
          gap: '20px',
          minWidth: '121px',
        }}
      >
        <Button
          style="articleActionIcon"
          onClick={() => {
            props.showDisplaySettingsModal(true)
          }}
        >
          <TooltipWrapped tooltipContent="Adjust Display Settings">
            <TextAa size={25} color={theme.colors.thHighContrast.toString()} />
          </TooltipWrapped>
        </Button>
        <PrimaryDropdown showThemeSection={false}>
          <DotsThreeOutline
            size={25}
            color={theme.colors.thHighContrast.toString()}
          />
        </PrimaryDropdown>
      </HStack>
    </>
  )
}
