import type { Meta, StoryObj } from '@storybook/react'
import { Banners, BannersProps } from '.'
import FunkImage from '../../assets/funk.svg'
import SpringBanner from '../../assets/spring-banner-wide.png'
import WatchesBanner from '../../assets/watches-banner.png'
import SkincareBanner from '../../assets/skincare-banner.svg'

export default {
  title: 'Elements/Banners',
  component: Banners,
  args: {
    size: 'wide',
    children: <img src={SpringBanner} alt="" />
  },
  argTypes: {
    size: {
      options: ['wide', 'square', 'small'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      table: {
        disable: true,
    }
  }
  },
} as Meta<BannersProps>

export const Wide: StoryObj<BannersProps> = {}

export const Square: StoryObj<BannersProps> = {
    args: {
        size: 'square',
        children: <img src={WatchesBanner} alt=''/>
    }
}

export const Small: StoryObj<BannersProps> = {
    args: {
        size: 'small',
        children: <img src={SkincareBanner} alt=''/>
    }
}