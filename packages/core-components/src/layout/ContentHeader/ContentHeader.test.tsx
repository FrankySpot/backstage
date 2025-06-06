/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ContentHeader } from './ContentHeader';
import { renderInTestApp } from '@backstage/test-utils';
import _ from 'lodash';

jest.mock('react-helmet', () => {
  return {
    Helmet: ({ defaultTitle }: any) => <div>defaultTitle: {defaultTitle}</div>,
  };
});

describe('<ContentHeader/>', () => {
  it('should render with title', async () => {
    const rendered = await renderInTestApp(<ContentHeader title="Title" />);
    expect(rendered.getByText('Title')).toBeInTheDocument();
  });

  it('should render without title', async () => {
    const rendered = await renderInTestApp(
      <ContentHeader>content</ContentHeader>,
    );
    expect(rendered.getByText('content')).toBeInTheDocument();
  });

  it('should render with titleComponent', async () => {
    const title = 'Custom title';
    const titleComponent = <h1>{title}</h1>;
    const rendered = await renderInTestApp(
      <ContentHeader titleComponent={titleComponent} />,
    );
    expect(rendered.getByText(title)).toBeInTheDocument();
  });

  it('should render with description', async () => {
    const rendered = await renderInTestApp(
      <ContentHeader description="description" />,
    );
    expect(rendered.getByText('description')).toBeInTheDocument();
  });
});
