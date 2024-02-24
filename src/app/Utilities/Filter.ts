export const filterConfig = {
    fields: ['status'], // Only filter by 'status' field
    operators: {
      status: { // Operator for 'status'
        $eq: { // Equal operator
          values: ['Active', 'Closed'], // Allow filtering by 'Active' and 'Closed' values
        },
      },
    },
  };
  