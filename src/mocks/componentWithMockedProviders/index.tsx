import { Context, MockNoteProvider } from "@/context";
import { categories, Category, Note, reducer } from "@/store";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = (categoriesState?: Category[]) =>
  configureStore({
    reducer: {
      categories: reducer,
    },
    preloadedState: {
      categories: categoriesState ?? categories,
    },
  });

export const componentWithMockedProviders = (
  component: JSX.Element,
  mockedContext?: Partial<Context>,
  categories?: Category[],
  notes?: Note[]
) => (
  <Provider store={store(categories)}>
    <MockNoteProvider
      // @ts-expect-error
      context={{
        ...mockedContext,
        categories: categories ?? mockedContext?.categories ?? [],
        notes: notes ?? mockedContext?.notes ?? [],
      }}
    >
      {component}
    </MockNoteProvider>
  </Provider>
);
