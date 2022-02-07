import React, {useEffect, useState} from 'react'

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)

        }

        setItem(parsedItem)
        setLoading(false)
      }, 1000)
    } catch (e) {
      setError(true)
    }
  })

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem)
    } catch (e) {
      setError(true)
    }
  }

  return {
    error, loading, item, saveItem
  }
}

export {useLocalStorage}
