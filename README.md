>Ce code est une application de liste de tâches créée avec React Native. Il utilise les composants React tels que useState, FlatList, TouchableOpacity. L'application utilise également les packages @react-navigation/native et @react-navigation/stack pour la navigation entre les écrans.

>L'application permet d'ajouter, de compléter et de supprimer des tâches de la liste. Je tiens à préciser qu'il est impossible de crée une tâche vide, un message d'erreur est prêt pour cette exemple :
![image](https://user-images.githubusercontent.com/105201941/233789507-6aa28df7-0199-4f2b-97b5-42090684b781.png)

>Les tâches peuvent également être marquées comme complétées ou non. 
>Il faut cliquer sur la tâche pour qu'elle soit marquées comme complétées. 

![image](https://user-images.githubusercontent.com/105201941/233610808-532d4c60-260c-4110-a7b6-f1f9af4beb9b.png)

>Il y a également un bouton pour supprimer toutes les tâches uniquement complétées (Clear) et un bouton pour envoyer la liste des tâches complété ou non par e-mail. Il y a une précision avec pour dire si elles sont complété ou non. (Je vous laisse découvrir l'objet du mail).
![image](https://user-images.githubusercontent.com/105201941/233611386-cb73a294-8a55-48c9-9c49-1b8a3e44600e.png)

>Le style de l'application est défini dans un objet styles avec des propriétés pour chaque composant. Les styles sont créés à l'aide du module StyleSheet de React Native.

>La fonction App() est le point d'entrée de l'application. Elle utilise des hooks React tels que useState pour gérer l'état de la liste des tâches et useEffect pour exécuter des effets secondaires tels que l'envoi d'un e-mail lorsque le bouton est pressé.

>La fonction renderItem est utilisée pour afficher chaque tâche dans la liste à l'aide du composant FlatList.

>Enfin, la fonction NavigationContainer est utilisée pour envelopper tous les composants pour permettre la navigation entre les écrans.
