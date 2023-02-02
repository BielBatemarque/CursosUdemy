import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Home } from '.';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';

const handlres = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    console.log('a chamada foi interceptada')
    return res(ctx.json([
      {
        userId: 1,
        id: 1,
        title: "title 1",
        body: "body 1",
        url: 'img1.jpg',
      },
      {
        userId: 2,
        id: 2,
        title: "title 2",
        body: "body 2",
        url: 'img2.jpg',
      },
      {
        userId: 3,
        id: 3,
        title: "title 3",
        body: "body 3",
        url: 'img3.jpg',
      },
    
        ]
    ));
  }),
];

const server = setupServer(...handlres);

describe('<Home/>', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.restoreHandlers();
  });
  
  afterAll(() => {
    server.close();
  });

  it('should render search posts and load more', async () => {
    render(<Home />);
    const noMorePost = screen.getByText('Não existem posts');

    //expect.assertions(2);

    await waitForElementToBeRemoved(noMorePost);
    
    // const search = screen.getByPlaceholderText('');
    //expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', {name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

 // userEvent.click(button);
 //   expect(screen.getByRole('heading', { name: 'title 3'})).toBeInTheDocument();

  });


});

