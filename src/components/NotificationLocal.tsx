import { useEffect } from "react";
import { Alert, Button, View } from "react-native";
import * as Notifications from "expo-notifications";
import { SchedulableTriggerInputTypes } from "expo-notifications";

// Configuración para manejar las notificaciones cuando llegan
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const pedirPermisos = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== "granted") {
    Alert.alert("Permiso denegado", "No puedes recibir notificaciones.");
    return;
  }
};

const programarNotificacion = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "📅 Recordatorio",
      body: "Tienes una tarea pendiente.",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger: {
      type: SchedulableTriggerInputTypes.DATE,
      date: new Date(2025, 1, 13, 13,37, 20),
      // seconds: 10,  
    },
  });
};

export default function NotificationLocal() {
  useEffect(() => {
    pedirPermisos();
  }, []);

  return (
    <View>
      <Button title="Programar Notificación" onPress={programarNotificacion} />
    </View>
  );
}
