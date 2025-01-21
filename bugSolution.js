The solution is to ensure that the `keyExtractor` function in your FlatList component always returns unique keys for each item in your data array.

Here's the corrected code:

```javascript
<FlatList
  data={[{ id: 1, value: 'a' }, { id: 2, value: 'b' }]}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <Text>{item.value}</Text>}
/>
```

**Explanation:**

* **Unique IDs:** The corrected example uses unique `id` values for each item in the data array.
* **String Conversion:**  It's a good practice to explicitly convert the `id` to a string using `toString()` to prevent potential type-related issues.  If your `id` is already a string, you can omit this conversion.

By ensuring unique keys, you prevent unexpected re-renders and maintain optimal performance in your FlatList.