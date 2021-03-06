### Summary

`<Card />` is used to group together content and actions.

It comes in a lot of variations to suit different needs.

### Example

- Full example of responsive cards

```tsx
import {
  Card,
  Button,
  FlexRow,
  FlexCol,
  FlexContainer,
  useViewport,
  breakpoints,
  grid,
} from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={12} l={4} style={{ marginBottom: '16px' }}>
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image overlayWith={<a href="http://zopa.com" target="_blank" />} url="http://placekitten.com/500/300" />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={12} l={4} style={{ marginBottom: '16px' }}>
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image overlayWith={<a href="http://zopa.com" target="_blank" />} url="http://placekitten.com/500/300" />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={12} l={4} style={{ marginBottom: '16px' }}>
      <Card layout={useViewport().width > grid.breakpoints.l ? 'vertical' : 'horizontal'}>
        <Card.Image overlayWith={<a href="http://zopa.com" target="_blank" />} url="http://placekitten.com/500/300" />
        <Card.Content>
          <Card.Heading>Macaroon bear claw powder</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth={useViewport().width > grid.breakpoints.l}>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with an image, heading, text, and a full width button

```tsx
import { Card, Button, FlexContainer, FlexCol, FlexRow } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Image overlayWith={<a href="http://zopa.com" target="_blank" />} url="http://placekitten.com/500/300" />
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Image overlayWith={<a href="http://zopa.com" target="_blank" />} url="http://placekitten.com/500/300" />
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and a full width button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary" fullWidth>
              Button
            </Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and a regular button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical card with a heading, text, and two button

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card styling="primary">
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
          <Card.Actions>
            <Button styling="secondary">Button</Button>
            <Button styling="primary">Button</Button>
          </Card.Actions>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```

- Vertical secondary card with just a heading and text

```tsx
import { Card, Button, FlexContainer, FlexRow, FlexCol } from '@zopauk/react-components';

<FlexContainer>
  <FlexRow>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Primary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
        </Card.Content>
      </Card>
    </FlexCol>
    <FlexCol xs={4}>
      <Card>
        <Card.Content>
          <Card.Heading>Secondary card</Card.Heading>
          <Card.Text>Ice cream marzipan marshmallow caramels sweet. Bonbon croissant lemon drops marzipan.</Card.Text>
        </Card.Content>
      </Card>
    </FlexCol>
  </FlexRow>
</FlexContainer>;
```
