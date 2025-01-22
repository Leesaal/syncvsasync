# Synchronous vs Asynchronous

Synchronous vs asynchronous communication took me a while to get my head around, so this repo will hopefully help you get to grips with this concept a little quicker.

I will be referring to synchronous vs asynchronous in terms of fetching data.

In basic terms, synchronous fetches occur one at a time whereas asynchronous fetches occur parallel to each other... but what does this mean practically?

Practically, this means that if we only use synchronous fetching within our websites, the customer cannot continue to interact with the rest of the webpages functionalities _until_ a response in received, irregardless of the response being a success or failure. Although, be mindful that failure responses _may_ take longer, especially if there are no timeouts in place, limited number of retries etc. So, blocking the customer from interacting with the webpage whilst waiting, could become a test of patience for the customer.

So, during times when the customer needs to continue using the websites functionalities, it may be better to consider using asynchronous communication.

## When would we need to use synchronous communication?

Payments. If the customer is submitting payment for an online order, they will want a clear response with a definite success or failure. A synchronous payment system will allow fraud checks to be conducted before the payment goes through and we want to be able to catch fraudulent activity before money is transferred.

Note: this is a very simple example, and there may be cases where payments could benefit from using both synchronous and asynchronous communication.

Another example is if you want to perfect an asynchronous fetch for the customers shopping basket. You first need to fetch the customers user id, then do a fetch for the basket. The basket fetch can be asynchronous but because this fetch requires the user id, the first fetch would need to be completed first and makes more sense to be synchronous.

...or you could use await but we don't get into that here at the moment.

## Why can asynchronous communication not be used with local files?

Accessing local files needs extra security.

## Where to find the code

The code is within syncvsasync/src/App.tsx
